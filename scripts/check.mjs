// Repository checks: skill structure, catalog consistency, and public safety.
// Usage:
//   node scripts/check.mjs              scan the working tree
//   node scripts/check.mjs --pre-push   also scan outgoing commits; private patterns required
import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import { homedir } from "node:os";
import { extname, join, resolve } from "node:path";
import { promisify } from "node:util";

const exec = promisify(execFile);
const prePush = process.argv.includes("--pre-push");
const SELF = "scripts/check.mjs";
const findings = [];
const fail = (message) => findings.push(message);

const git = (args) =>
  exec("git", args, { maxBuffer: 20 * 1024 * 1024 }).then((result) => result.stdout);

// ---------- skill structure ----------

const NAME = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ALLOWED_KEYS = new Set(["name", "description", "license", "compatibility", "metadata", "allowed-tools"]);
const COMPANIONS = ["README.md", "EXAMPLE.md"];

// Reads top-level keys. Supports plain and quoted scalars and block scalars
// (`>`, `>-`, `|`, `|-`); indented lines under a key without a block
// indicator are joined as a plain multi-line scalar.
function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return null;
  const fields = {};
  const errors = [];
  const lines = match[1].split("\n");
  for (let i = 0; i < lines.length; i += 1) {
    const kv = lines[i].match(/^([A-Za-z][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    const [, key, raw] = kv;
    const block = raw.match(/^([>|])([+-]?)\s*$/);
    const continuation = [];
    while (i + 1 < lines.length && (/^\s+\S/.test(lines[i + 1]) || lines[i + 1].trim() === "")) {
      continuation.push(lines[i + 1].trim());
      i += 1;
    }
    while (continuation.length && continuation.at(-1) === "") continuation.pop();
    if (block) {
      fields[key] = block[1] === "|" ? continuation.join("\n") : continuation.join(" ").replace(/\s+/g, " ");
    } else {
      if (!/^["']/.test(raw) && /: | #/.test(raw)) {
        errors.push(`frontmatter "${key}" is an unquoted value containing ": " or " #", which YAML parsers reject or truncate`);
      }
      fields[key] = [raw, ...continuation].join(" ").trim().replace(/^["']|["']$/g, "").trim();
    }
  }
  return { fields, errors, body: text.slice(match[0].length) };
}

// Literal headings ("## Gates") and field labels ("- Owner:") from the first
// markdown block in the Output section. Placeholders in brackets are skipped.
function outputMarkers(body) {
  const output = body.split(/^## Output.*$/m)[1];
  const block = output?.match(/```markdown\n([\s\S]*?)\n```/)?.[1] ?? "";
  const markers = [];
  for (const line of block.split("\n")) {
    const heading = line.match(/^#{2,}\s+[^[\]]+$/);
    const field = line.match(/^- [A-Z][\w ,'-]*:/);
    if (heading) markers.push({ text: heading[0].trim(), exact: true });
    else if (field) markers.push({ text: field[0], exact: false });
  }
  return markers;
}

async function checkSkills() {
  const dirs = (await readdir("skills", { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  if (dirs.length === 0) fail("skills/: no skills found");

  for (const dir of dirs) {
    const base = join("skills", dir);
    const skillPath = join(base, "SKILL.md");
    if (!existsSync(skillPath)) {
      fail(`${base}: missing SKILL.md`);
      continue;
    }
    for (const file of COMPANIONS) {
      if (!existsSync(join(base, file))) fail(`${base}: missing ${file}`);
    }
    const parsed = parseFrontmatter(await readFile(skillPath, "utf8"));
    if (!parsed) {
      fail(`${skillPath}: missing or malformed frontmatter`);
      continue;
    }
    const { fields, errors, body } = parsed;
    for (const error of errors) fail(`${skillPath}: ${error}`);
    for (const key of Object.keys(fields)) {
      if (!ALLOWED_KEYS.has(key)) fail(`${skillPath}: unexpected frontmatter key "${key}"`);
    }
    if (fields.name !== dir) fail(`${skillPath}: name "${fields.name}" must match folder "${dir}"`);
    if (!NAME.test(dir) || dir.length > 64) fail(`${skillPath}: folder name must be lowercase words joined by hyphens, max 64 characters`);
    if (!fields.description) fail(`${skillPath}: description is required`);
    else if (fields.description.length > 1024) fail(`${skillPath}: description exceeds 1024 characters`);
    if (fields.description && !/\bUse when\b/.test(fields.description)) {
      fail(`${skillPath}: description must say when to use the skill with a "Use when" clause`);
    }
    if (fields.license !== "MIT") fail(`${skillPath}: license must be MIT`);

    const headings = [...body.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1].trim().toLowerCase());
    for (const required of ["purpose", "when to use", "when not to use"]) {
      if (!headings.includes(required)) fail(`${skillPath}: missing "## ${required}" section`);
    }
    if (!headings.some((h) => h.startsWith("output"))) fail(`${skillPath}: missing an "## Output" section`);

    // The worked example must show every heading and field the output shape promises.
    const exampleLines = (await readFile(join(base, "EXAMPLE.md"), "utf8").catch(() => ""))
      .split("\n").map((line) => line.trim());
    for (const { text, exact } of outputMarkers(body)) {
      const found = exampleLines.some((line) => (exact ? line === text : line.startsWith(text)));
      if (!found) fail(`${base}/EXAMPLE.md: output is missing "${text}" from the SKILL.md output shape`);
    }
  }
  return dirs;
}

const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
const COUNT = new RegExp(`\\b(\\d+|${NUMBER_WORDS.join("|")})\\s+skills\\b`, "gi");

async function checkCatalog(skills, files) {
  const readme = await readFile("README.md", "utf8");
  for (const skill of skills) {
    if (!readme.includes(`](skills/${skill})`)) fail(`README.md: skills table does not link skills/${skill}`);
  }
  for (const path of files) {
    if (/(^|\/)SKILL\.md$/.test(path) && !/^skills\/[^/]+\/SKILL\.md$/.test(path)) {
      fail(`${path}: SKILL.md files belong only in skills/<name>/ (installers discover them anywhere)`);
    }
  }

  let plugin;
  const catalogTexts = { "README.md": readme };
  try {
    for (const path of [".claude-plugin/plugin.json", ".claude-plugin/marketplace.json"]) {
      const text = await readFile(path, "utf8");
      const parsed = JSON.parse(text);
      if (path.endsWith("plugin.json")) plugin = parsed;
      catalogTexts[path] = text;
    }
  } catch (error) {
    fail(`.claude-plugin: ${error.message}`);
    return;
  }
  for (const [path, text] of Object.entries(catalogTexts)) {
    for (const match of text.matchAll(COUNT)) {
      const word = match[1].toLowerCase();
      const stated = /^\d+$/.test(word) ? Number(word) : NUMBER_WORDS.indexOf(word);
      if (stated !== skills.length) fail(`${path}: says "${match[0]}" but there are ${skills.length} skill folders`);
    }
  }
  const changelog = await readFile("CHANGELOG.md", "utf8");
  const latest = changelog.match(/^##\s+(\d+\.\d+\.\d+)/m)?.[1];
  if (latest !== plugin.version) fail(`plugin.json version ${plugin.version} does not match latest CHANGELOG entry ${latest}`);
}

// ---------- public safety ----------

const BINARY = new Set([".gif", ".ico", ".jpeg", ".jpg", ".pdf", ".png", ".webp", ".zip"]);
const GENERIC = [
  [/\/Users\/[^/\s]+\//, "personal macOS path"],
  [/\/home\/[^/\s]+\//, "personal Linux path"],
  [/\/private\/(?:var|tmp)\//, "local temp path"],
  [/\b[a-z0-9-]+\.(?:lan|local|internal)\b/i, "internal hostname"],
  [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, "private key"],
  [/\b(?:sk-[A-Za-z0-9_-]{20,}|gh[pousr]_[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16}|xox[baprs]-[A-Za-z0-9-]{10,})\b/, "API token"],
  [/\b(?:api[_-]?key|access[_-]?token|client[_-]?secret|password)\s*[:=]\s*["'][^"']{8,}["']/i, "credential assignment"],
  [/[\w.+-]+@(?:gmail|yahoo|outlook|hotmail|icloud|proton)\.[a-z]+/i, "personal email address"],
];

// Emoji blocks (pictographs, emoticons, transport, symbols, flags), the
// miscellaneous symbols and dingbats blocks, and the emoji variation selector.
// Box-drawing characters and plain arrows used in diagrams are outside these.
const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/u;

function literal(value) {
  return new RegExp(value.replace(/[.*+?^{}$()|[\]\\]/g, "\\$&"), "i");
}

async function privatePatterns() {
  const configured = process.env.PUBLIC_SAFETY_PATTERNS_FILE
    ? [process.env.PUBLIC_SAFETY_PATTERNS_FILE]
    : (await git(["config", "--get-all", "publicSafety.patternsFile"]).catch(() => ""))
        .split("\n").map((line) => line.trim()).filter(Boolean);
  if (configured.length === 0) {
    if (prePush) throw new Error("set git config publicSafety.patternsFile before pushing");
    return [];
  }
  const patterns = [];
  for (const entry of configured) {
    const path = resolve(entry.replace(/^~(?=\/)/, homedir()));
    const content = await readFile(path, "utf8").catch(() => null);
    if (content === null) throw new Error("private pattern file is unreadable: " + path);
    for (const line of content.split(/\r?\n/).map((l) => l.trim())) {
      if (line && !line.startsWith("#")) patterns.push([literal(line), "private term"]);
    }
  }
  return patterns;
}

function scan(label, path, content, patterns) {
  if (/(^|\/)\.env(\.|$)/.test(path)) fail(`${label}: environment file must not be tracked`);
  if (path === SELF || BINARY.has(extname(path).toLowerCase())) return;
  for (const [pattern, kind] of patterns) {
    if (pattern.test(content)) fail(`${label}: matched ${kind}`);
  }
  for (const match of content.matchAll(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g)) {
    if (match[0] !== "127.0.0.1") fail(`${label}: IP address ${match[0]}`);
  }
  if (extname(path) === ".md" && content.includes("\u2014")) fail(`${label}: contains an em dash`);
  if (EMOJI.test(content)) fail(`${label}: contains an emoji`);
}

async function outgoingCommits() {
  let input = "";
  process.stdin.setEncoding("utf8");
  for await (const chunk of process.stdin) input += chunk;
  const commits = new Set();
  for (const line of input.trim().split(/\r?\n/).filter(Boolean)) {
    const [, localSha, , remoteSha] = line.split(/\s+/);
    if (!localSha || /^0+$/.test(localSha)) continue;
    const range = remoteSha && !/^0+$/.test(remoteSha)
      ? [`${remoteSha}..${localSha}`]
      : [localSha, "--not", "--remotes"];
    (await git(["rev-list", ...range])).trim().split("\n").filter(Boolean).forEach((c) => commits.add(c));
  }
  return commits;
}

// ---------- main ----------

try {
  const files = (await git(["ls-files", "--cached", "--others", "--exclude-standard", "-z"]))
    .split("\0").filter(Boolean);
  const skills = await checkSkills();
  await checkCatalog(skills, files);

  const patterns = [...GENERIC, ...(await privatePatterns())];
  for (const path of files) {
    scan(path, path, await readFile(path, "utf8").catch(() => ""), patterns);
  }
  let history = 0;
  if (prePush) {
    for (const commit of await outgoingCommits()) {
      history += 1;
      const paths = (await git(["diff-tree", "--root", "--no-commit-id", "--name-only", "-r", "-z", commit]))
        .split("\0").filter(Boolean);
      for (const path of paths) {
        const content = await git(["show", `${commit}:${path}`]).catch(() => "");
        scan(`${commit.slice(0, 12)}:${path}`, path, content, patterns);
      }
    }
  }

  if (findings.length) {
    console.error("Checks failed:");
    for (const finding of new Set(findings)) console.error("- " + finding);
    process.exitCode = 1;
  } else {
    const privateCount = patterns.length - GENERIC.length;
    console.log(
      `checks passed: ${skills.length} skill(s), ${files.length} file(s), ` +
      `${privateCount} private term(s)` + (prePush ? `, ${history} outgoing commit(s)` : ""),
    );
  }
} catch (error) {
  console.error("Checks failed closed: " + error.message);
  process.exitCode = 1;
}
