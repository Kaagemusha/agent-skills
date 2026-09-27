# Contributing

Issues and pull requests are welcome, whether a fix to an existing skill or a
proposal for a new one.

## Adding a skill

1. Copy `templates/skill-template.md` to `skills/<skill-name>/SKILL.md`. The
   folder name must match the `name` field and use lowercase words joined by
   hyphens.
2. Keep the required sections: Purpose, When to use, When not to use, and an
   Output section. Add method sections in between as needed.
3. Add `README.md` (a short overview) and `EXAMPLE.md` (one realistic input and
   the full output) in the same folder.
4. Add a row for the skill to the table in the root `README.md`.
5. Run the checks:

```bash
npm run check
```

## What makes a good skill here

- It does one job and names the situations where it should not be used.
- It separates evidence from assumption and says so when evidence is missing.
- It never treats its own output as permission to act.
- It works with any model and any tool setup.
- It contains nothing specific to one person's machines, projects, or
  accounts.

## Checks

`npm run check` validates every skill's header, required sections, and
companion files, requires a "Use when" clause in every description, confirms
that each worked example shows every heading and field label in its skill's
output shape, confirms the root table lists every skill and that stated skill
counts match, and scans for em dashes, emoji, personal paths, secrets, and
private addresses. The same checks run on every push and pull request.

Maintainers can also enable a pre-push hook that runs the scan against a
private list of terms kept outside the repository:

```bash
npm run public-safety:install
git config --add publicSafety.patternsFile /path/to/private-patterns
```
