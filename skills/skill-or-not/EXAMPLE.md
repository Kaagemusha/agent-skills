# Skill Or Not: worked example

## Input

```text
Should this become a skill? I have pasted the same prompt about eight times
this month: "Turn these meeting notes into action items with owners and due
dates." It works most of the time, but sometimes it invents owners.
```

## Output

```markdown
# Skill Or Not: Meeting notes to action items

## One-sentence test
For raw meeting notes, with the notes and the attendee list, use this method
to produce a list of action items with owner and due date, unless the meeting
made no decisions or the notes are a transcript longer than an hour.

## Readiness
| Check | Status | Note |
|---|---|---|
| Trigger | met | Repeated eight times on the same kind of input. |
| Non-trigger | missing | Nothing stops it running on notes with no decisions, where it invents tasks. |
| Inputs | missing | The attendee list is not supplied, which is why owners get invented. |
| Output | met | A list with owner and due date per item is stable and usable. |
| Verification | missing | No check that each owner attended and each item appears in the notes. |
| Examples and counterexamples | missing | No saved example of good output or of a meeting that should produce nothing. |
| Portability | met | No private details in the prompt. |

## Overlap
- Compared with: Brief To Work Order, Handoff
- Decision: new. Brief To Work Order scopes one assignment in depth; this
  lists many small actions. Handoff continues one task.

## Verdict
- Current layer: saved prompt
- Recommended layer: documented method now, skill after the gates below
- Gate before the next promotion: require the attendee list as input, add
  the rule "owner must be an attendee, otherwise mark unassigned," and save
  one good example and one meeting that correctly produced no actions.
```
