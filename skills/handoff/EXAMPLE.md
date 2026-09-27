# Handoff: worked example

## Input

```text
I'm stopping for today. Write a handoff so Sam can continue moving our
newsletter signup form from the old email tool to the new one.
```

## Output

```markdown
# Handoff: newsletter signup migration (2026-09-24)

## Objective and source of truth
Move the website newsletter signup from the old email tool to the new one
without losing signups. The migration checklist in the team tracker governs;
if this note disagrees with it, the checklist wins.

## Current state and next action
The new form is built and embedded on a hidden test page. The live site still
uses the old form. Next action: submit three test signups on the test page and
confirm each one appears in the new tool's "Newsletter" list.

## Active constraints and decisions
- Keep the old form live until test signups are confirmed.
- Decided: double opt-in stays on. Legal asked for it.

## Completed work and verification
- New form built and styled to match the site. Checked visually on desktop
  and mobile.
- Existing subscribers imported: 4,812 in the old tool, 4,812 in the new one.
  Counts compared directly in both tools.
- Not yet checked: that the confirmation email sends from the new tool.

## Open questions and risks
- The old tool's cancellation date is not confirmed. Do not cancel it until
  the new form has run live for one full week.
- Stop and roll back if live signups drop to zero for more than a day after
  the switch.

## Ground-truth pointers
- Migration checklist: team tracker, "Newsletter migration" card
- Test page: the hidden page named "signup-test" in the site editor
- New tool: "Newsletter" list, import log dated 2026-09-24
```
