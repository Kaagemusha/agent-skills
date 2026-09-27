---
name: evidence-check
description: Check whether the claims in a draft, plan, report, or decision are backed by evidence, labeling each supported, inferred, assumed, or unknown with its source. Use when someone is about to rely on specific claims, or a summary cites sources nobody has inspected. Do not use for a broad critique of a plan (use Red Team Review) or an open research question.
license: MIT
---

# Evidence Check

## Purpose

Show which important claims are supported by the available evidence, which
are interpretations, and what still needs checking. This is a bounded review
of evidence, not a general critique or permission to take external action.

## When to use

- A draft, report, plan, or decision rests on claims someone is about to rely
  on.
- A summary cites sources nobody has actually inspected.
- Several confident statements need to be separated into what is known and
  what is assumed before a decision.

## When not to use

- You want a broad critique of a plan's failure modes. Use Red Team Review.
- There is no draft or decision yet, only an open research question.
- Someone wants the text rewritten or approved. This skill reports on
  evidence; it does not edit or sign off.

## Workflow

1. Identify the decision or conclusion the claims are meant to support.
2. Break compound or consequential statements into specific claims that can
   be checked.
3. Trace each claim to the supplied source or an authoritative source you are
   actually able to inspect. Give enough detail for the reader to find it.
4. Classify each claim as:
   - `supported`: the cited evidence directly supports it
   - `inferred`: it follows from evidence but is not stated directly
   - `assumed`: it is being taken as true without enough evidence
   - `unknown`: evidence is missing, inaccessible, or inconclusive
5. Note material conflicts, source limitations, dates, missing context, and
   whether the evidence supports the full wording or only a narrower claim.
6. State the confidence and practical effect on the decision. Do not treat
   repetition, polish, or an unverified summary as independent confirmation.
7. List the smallest useful next checks, ordered by how much they could change
   the decision. If the available evidence is sufficient, say so and identify
   its limits.

## Guardrails

- Do not invent citations, source contents, dates, or verification.
- If a source cannot be accessed, say that plainly and leave its claims
  unverified.
- Keep facts, interpretations, and recommendations visibly distinct.
- Do not silently rewrite the original or present evidence review as approval.

## Output shape

```markdown
# Evidence Check: [Decision or artifact]

## Decision supported
[What this evidence check is meant to inform]

## Claims

| Claim | Status | Evidence and location | Confidence | Decision effect |
|---|---|---|---|---|
| [Specific claim] | supported / inferred / assumed / unknown | [Traceable source detail] | high / medium / low | [Effect or none] |

## Conflicts and limits
[Material disagreement, age, access gaps, or scope limits]

## Next checks
1. [Smallest high-value verification]

## Assessment
[Whether the evidence supports the decision, and under what limits]
```
