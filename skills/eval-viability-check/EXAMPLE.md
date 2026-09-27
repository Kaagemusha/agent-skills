# Eval Viability Check: worked example

## Input

```text
Run Eval Viability Check. We want an LLM judge that reads a support ticket
and predicts whether it will be escalated to engineering, so we can route
likely escalations to senior staff automatically. We have 1,200 past
tickets; 18% were escalated. The input would be the ticket text as stored in
our help desk. Test split is 240 tickets.

Checked so far:
- Our support lead labeled 10 tickets (5 escalated, 5 not) from the first
  customer message only and got 8 right.
- Stored ticket text includes a "Priority: P1" line that agents add after
  triage. A rule that predicts "escalated" whenever P1 appears scores 91% on
  the training split.
```

## Output

```markdown
# Eval Viability Check: Support ticket escalation

## Task
- Decision the eval informs: whether to route likely escalations to senior
  staff automatically
- Input the model sees: ticket text as stored in the help desk
- Label and where it comes from: escalated yes or no, from the ticket history
- Classes and counts: 216 escalated, 984 not escalated; test split 240
  (about 43 escalated)

## Gates
| Gate | Result | Evidence | Action |
|---|---|---|---|
| 1. Determinacy | pass | A support lead labeled 10 balanced tickets from the first message only: 8 of 10 correct, against 5 of 10 for always guessing one class. | None |
| 2. Leakage | fail | Stored ticket text includes a "Priority: P1" line that agents add after triage. Predicting "escalated" whenever P1 appears scores 91% on the training split. | Strip fields added after the first customer message, then rerun this gate. |
| 3. Baseline | 82% | Always predicting "not escalated" on the 240-case test split. | Report beside every accuracy. |
| 4. Power | about 5 points per score | At roughly 85% accuracy on 240 cases, one standard error is about 2.3 points, so a single score is uncertain by about 5 points either way. Comparing two judges on this set needs a paired test such as McNemar's. 43 escalated cases is thin for per-class results. | Add escalated cases before judging per-class recall. |

## Verdict
Redesign. Gate 2 failed: the input carries a field written after the outcome
began. Any score on the current input would measure the triage tag, not the
model.

## Next steps
1. Rebuild the input from the first customer message only, then rerun gate 2.
2. Find more escalated tickets, for example in older history, to strengthen
   the escalated class in the test split.
```
