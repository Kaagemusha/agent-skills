# Retrievable Writing: worked example

## Input

````text
Review this claim note in review mode.

# Retries

## The mechanism
When a call fails, the client tries again up to three times with a growing
delay between attempts.

## Why it matters
It hides short outages from users. As noted above, the delay grows each time.

## Monitoring
| Metric | Alert when |
|---|---|
| retry_rate | above 5% for 10 min |

## Caveat
This only helps with short outages. For longer ones see [[incident-runbook]].
````

## Output

```markdown
# Retrievable Writing Review: Retries

## Blocking
- Rule 2 (mechanical), "Why it matters": opens with "It," whose subject is
  only in the previous section. Fix: "Automatic retries hide short outages
  from users."
- Rule 2 (mechanical), "Monitoring": opens on a table with no sentence. Fix:
  add "Alert on the retry rate, because retries make outages invisible to
  users." before the table.

## Advisory
- Rule 1 (mechanical), top of note: no claim before the first section, so a
  partial load cannot tell what the note asserts. Add "Automatic retries
  hide short outages from users, so outages go unnoticed unless an alert
  counts retries." under the title.
- Rule 3 (mechanical), "Why it matters": "As noted above" points at another
  section. Replace with the fact itself or delete; the delay is already
  stated.
- Rule 5 (judgment), title: "Retries" is a topic. A claim title such as
  "Retries hide outages unless alerts count them" retrieves better.

## Clean
- Rule 4: no unexpanded internal terms.
- Rule 8: the numbers are the note's own; none were added.
- Rules 6 and 7: not checked, because no earlier version was provided.
```
