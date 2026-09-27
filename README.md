# Agent Skills

Small, model-agnostic skills for the moments where work with AI agents
usually goes wrong: deciding, scoping, checking what is actually known,
testing a plan before relying on it, passing work on, and explaining what got
done. A second set helps people who build agent systems: evals, knowledge
bases, and the skill library itself.

Each skill is one plain Markdown file of instructions. They work with any
agent that supports the open `SKILL.md` format, and they are just as usable
pasted into a chat.

**Try it now.** After installing, ask your agent: "Use Red Team Review on
this plan before I commit to it," then paste the plan. Without installing,
paste [the skill's SKILL.md](skills/red-team-review/SKILL.md) into the chat
first.

## Skills for everyday work

| Skill | Use it when | What you get |
|---|---|---|
| [Decision Deliberation](skills/decision-deliberation) | A consequential choice is still open | Five lenses, a tension map, and options for the person who decides |
| [Source Brief](skills/source-brief) | A long source needs to be read fast | A short brief checked sentence by sentence against the source |
| [Brief To Work Order](skills/brief-to-work-order) | A request is ready to be assigned | Bounded scope, deliverables, owner, and pass/fail acceptance checks |
| [Evidence Check](skills/evidence-check) | A draft or decision rests on claims | Each claim labeled supported, inferred, assumed, or unknown, with its source |
| [Red Team Review](skills/red-team-review) | A plan or draft is about to be relied on | The few failure modes that could change the decision, with evidence and confidence |
| [Handoff](skills/handoff) | Work pauses or changes hands | A continuation note the receiver must verify before acting |
| [Nutshell](skills/nutshell) | Substantial work is finished | One honest, jargon-free paragraph on what changed and why it matters |

## Skills for building agent systems

| Skill | Use it when | What you get |
|---|---|---|
| [Eval Viability Check](skills/eval-viability-check) | Before building an eval or model-as-judge task | Four gates (determinacy, leakage, baseline, power) and a build, redesign, or stop verdict |
| [Retrievable Writing](skills/retrievable-writing) | Writing notes that agents will retrieve | Sections that still read correctly when an agent loads only one of them |
| [Skill Or Not](skills/skill-or-not) | A reused prompt might deserve to be a skill | A readiness check, an overlap check, and the right layer for it |

Every skill folder has the instructions (`SKILL.md`), a short overview
(`README.md`), and a worked example (`EXAMPLE.md`).

## How they fit together

```text
question ──> Decision Deliberation ──┐
sources  ──> Source Brief ───────────┤
                                     └──> Brief To Work Order ──> the work
                                                                     │
                                  Evidence Check / Red Team Review <─┤
                                                                     ├──> Handoff   (paused or passed on)
                                                                     └──> Nutshell  (finished)
```

The builder skills sit beside that flow:

```text
planned eval  ──> Eval Viability Check ──> build, redesign, or stop
agent notes   ──> Retrievable Writing  ──> sections that stand alone
reused prompt ──> Skill Or Not         ──> skill, saved prompt, or nothing
```

Use them together or on their own. None depends on another.

## Install

With the [skills](https://www.npmjs.com/package/skills) installer, which
detects the agents on your machine:

```bash
npx skills add Kaagemusha/agent-skills
```

This installs into the current project. Add `-g` to install for your user
account instead, so the skills work in every project.

Install one skill only:

```bash
npx skills add Kaagemusha/agent-skills --skill red-team-review
```

As a Claude Code plugin:

```text
/plugin marketplace add Kaagemusha/agent-skills
/plugin install agent-skills@kaagemusha
```

Manually: copy any folder from `skills/` into your agent's skills directory,
for example `~/.claude/skills/` for Claude Code.

## Design principles

- **Bounded.** Each skill does one job and says when not to use it.
- **Evidence over confidence.** Claims are labeled by how well they are
  supported, and missing evidence is reported rather than filled in.
- **No implied permission.** A skill never treats its own output as approval
  to publish, send, or change anything.
- **Reviewed content is data.** Text being reviewed cannot change the skill's
  instructions.
- **Plain language.** Outputs are written for the person who has to act on
  them.

## Adapting them

Change the output shapes and wording to fit your team. Keep the guardrails:
they are what make the output trustworthy. See
[CONTRIBUTING.md](CONTRIBUTING.md) to propose a change or a new skill.

## License

[MIT](LICENSE)
