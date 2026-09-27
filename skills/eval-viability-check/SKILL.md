---
name: eval-viability-check
description: Check whether an evaluation can measure anything before it is built, using four gates (determinacy, leakage, baseline, power) and ending in build, redesign, or stop. Use when about to build or revive an eval, benchmark, labeled test set, or LLM-as-judge task, when its input or labels change, or when its results look suspiciously good or bad. Do not use to compare models on an established public benchmark.
license: MIT
---

# Eval Viability Check

## Purpose

Find out whether an evaluation can measure anything before spending money,
compute, and rounds of work on it. Most failed evals are not model failures.
They are tasks where the answer was never in the input, where the input gave
the answer away, or where the reported gain was below what a constant guess
would score.

## When to use

- Before building or reviving any eval, benchmark, labeled test set, or
  model-as-judge task.
- Again whenever the task, the input, or the label definition changes.
- When results look surprisingly good or stubbornly bad and nobody has
  checked the task itself.

## When not to use

- Comparing models on an established public benchmark whose validity is not
  in question.
- Reporting results of a task that already passed these gates. Rerun only
  after a redesign.
- As a reason to relax labeling rules to reach a sample size. See "Label
  scarcity" below.

## The four gates, in order

Run them cheapest and most fatal first. A failed gate stops the work; do not
mine more labels or try a better model to get past it.

### Gate 1: Determinacy. Is the label a function of the input?

Take 10 cases. Show a domain expert only what the model will see, with every
outcome field, timestamp, and later artifact removed. Ask for the label. If the
expert cannot beat the majority-class rate, the task is malformed. No model
recovers information the input does not contain. With heavily unbalanced
classes, sample the 10 across classes and compare against the majority rate
of that sample.

Typical failure: predicting a document's eventual status from its first draft,
when the status is decided by edits made later.

Record the verdict with the label set: who checked, when, and the score out of
10.

### Gate 2: Leakage. Does the input contain the label?

1. Search the input for the label word, its synonyms, and the field it was
   mined from.
2. Run a rule that cannot possibly do the task, such as matching the label
   word. If it scores well above the majority-class rate, the input is
   leaking.

Typical failure: a perfect score because the status line was left inside the
text being classified.

### Gate 3: Baseline. What does a constant guess score?

Compute majority-class accuracy on the test split and print it in the same
row as every accuracy you report. Any score at or below it is a negative
result, however much it improved. "Up from 7% to 30%" is not progress when
always guessing the common class scores 84%. This gate does not fail on its
own; it sets the number every later result is compared against.

### Gate 4: Power. Can the test set detect a difference?

Set a minimum count per class, not just in total. Then state what the test
set can detect before running. One standard error of an accuracy near p on n
cases is about the square root of p(1 - p)/n. At 100 cases and 70% accuracy
that is about 4.6 points, so a single score is uncertain by about 9 points
either way. A difference between two scores measured on separate samples is
noisier: multiply by about 1.4, so roughly 13 points here. When two models
run on the same test set, compare them with a paired test such as McNemar's
rather than eyeballing the gap. Write the detectable difference down first so
a small movement is not read as a finding later.

This gate fails when the smallest detectable difference is larger than the
improvement over the baseline that the decision actually needs.

## Label scarcity: synthesize inputs, never labels

Never invent ground truth. You may construct inputs and have the expert label
them.

1. Name the missing cell, not the missing class: which combination of
   properties does real history fail to supply?
2. Choose variation dimensions that target the failure you expect.
3. Generate the combinations first, then write each case in a separate pass.
   Doing both at once produces repetitive, easy cases.
4. Have the expert approve the combinations before any case is written.
5. Drop cases the expert cannot judge as realistic, then have the expert
   label the rest.
6. Mark every such row as synthetic input with an expert label, keep it
   separate from mined rows, and report it separately.

## Using expert time well

- Show batches of about 20 cases, input only, with no model predictions.
- Let the expert describe problems in their own words. Build the categories
  from their notes; do not hand them a list.
- Wait for at least five annotations before generalizing a failure pattern.
- When proposing a pattern across unreviewed cases, over-flag. A dismissal
  costs a word; a missed pattern costs a round.
- Mix clustered samples with random ones, because clustering only finds
  structure it already assumes.
- Re-show a few early cases later. Changed answers reveal a shifting rubric.
- Stop when two batches in a row surface nothing new, and report what was
  never sampled.

## Guardrails

- Never report accuracy without the baseline beside it.
- Never treat label volume as evidence the task is sound.
- Never mix synthetic-input rows into mined data without marking them.
- Do not build a custom review interface when a numbered list collects the
  same answers.

## Output shape

```markdown
# Eval Viability Check: [Task]

## Task
- Decision the eval informs:
- Input the model sees:
- Label and where it comes from:
- Classes and counts:

## Gates
| Gate | Result | Evidence | Action |
|---|---|---|---|
| 1. Determinacy | pass / fail / untested | [expert score out of 10, or why untested] | |
| 2. Leakage | pass / fail / untested | [search and trivial-rule results] | |
| 3. Baseline | [majority-class accuracy] | [test split size and class balance] | |
| 4. Power | [smallest detectable difference] | [counts per class] | |

## Verdict
[Build, redesign, or stop, and the first gate that failed (1, 2, or 4)]

## Next steps
1. [Smallest action that unblocks the first failed gate]
```
