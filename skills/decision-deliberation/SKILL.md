---
name: decision-deliberation
description: Prepare a consequential decision under uncertainty by running five functional lenses (incentives, system boundaries, historical patterns, second-order effects, cognitive bias), mapping unresolved tensions, and ending in options for the person who decides. Use when choosing among options, or before any exist; use Red Team Review when one chosen plan needs pressure-testing.
license: MIT
---

# Decision Deliberation

## Purpose

Prepare judgment under uncertainty. The skill does not make the decision. It
makes the decision space harder to fake: assumptions surface, incentives are
named, dissent stays visible, and the output ends in options the decision
owner can act on.

## When to use

- A strategic, business, architecture, hiring, or governance choice where
  evidence is partial or values are in tension.
- A decision with delayed or indirect consequences.
- A situation where the most elegant story may not be the truest one.

## When not to use

- One chosen plan or draft already exists and needs pressure-testing. Use Red
  Team Review. Comparing two or more candidate plans still belongs here.
- Factual lookups, routine summaries, quick drafting, or anything where speed
  matters more than judgment quality.
- Licensed medical, legal, financial, or safety-critical advice, except as
  exploratory framing before qualified review.

## Role boundary

Surface assumptions, pressure incentives, test boundaries, preserve dissent,
map tensions, and turn deliberation into options, questions, or a decision
record. Never decide for the owner, flatten disagreement into consensus,
cover weak evidence with confident prose, or add ceremony that does not
improve the decision.

## The five lenses

Every pass runs all five. Each is a function, not a persona.

1. **Incentives.** Who benefits, who is exposed, what incentives change on
   this path, and who could exploit it?
2. **System boundaries.** What is inside the system, what is outside, what
   sits at the edge, and what breaks if the line is drawn wrong?
3. **Historical patterns.** What analogues and base rates apply, where did
   similar efforts fail, and what is different enough to matter this time?
4. **Second-order effects.** What adapts in response, what becomes easier or
   harder later, and which consequences are delayed or indirect?
5. **Cognitive bias.** What motivated reasoning, anchor, or satisfying story
   may be crowding out evidence, and what missing evidence would change the
   view?

Add a named voice (a specific thinker or tradition) only when it contributes
a constraint the five lenses do not, stated in one sentence. Default to none;
use at most two; never for prestige or tone. Record its reason and whether it
surfaced a distinction the lenses missed; if not, drop its findings.

## Workflow

1. **Orient.** State the question, stakes, time horizon, decision owner,
   evidence available, evidence missing, and what useful output looks like. If
   the question does not warrant deliberation, say so and stop.
2. **Run the lenses.** For each: one to three findings, one risk or blind
   spot, and one question that would improve the decision. Pressure, not
   volume.
3. **Map tensions.** Classify each real tension as action-blocking,
   decision-relevant, or watch-only. Do not resolve a tension to make the
   output cleaner.
4. **State refusals and limits.** For example: the evidence cannot separate
   two explanations, the frame hides a value choice, or the question needs
   qualified medical, legal, or financial review.
5. **Check judgment.** Separate what is clear, what is plausible but
   unproven, what is unresolved, what evidence would change the view, and what
   the owner must decide.
6. **Hand off.** Options, next questions, and risks to monitor. Recommend only
   when the evidence supports it.

## Failure modes

- **Prestige theater:** impressive names, generic output. Rerun with the
  lenses only.
- **Premature coherence:** an elegant conclusion with no dissent. Keep at
  least one unresolved question in the tension map.
- **Aesthetic seduction:** it sounds profound but changes nothing. Cut any
  line that does not clarify evidence, tension, refusal, or action.
- **Responsibility drift:** the output reads as the decision. Make the
  owner's choice explicit in the judgment check.

## Output shape

```markdown
# Decision Deliberation: [Question]

## Orientation
- Question:
- Stakes:
- Horizon:
- Decision owner:
- Evidence available:
- Evidence missing:
- Useful output:

## Lenses
### Incentives
- Finding:
- Risk:
- Better question:
### System boundaries
[same three lines]
### Historical patterns
[same three lines]
### Second-order effects
[same three lines]
### Cognitive bias
[same three lines]

## Named voices
- [Voice]: [one-sentence reason]. Surfaced a distinction the lenses missed: yes / no
[Or: None used. The five lenses were sufficient.]

## Tension map
- Action-blocking:
- Decision-relevant:
- Watch-only:

## Refusals and limits
- [What the evidence or frame cannot support]

## Judgment check
- Clear:
- Plausible but unproven:
- Unresolved:
- Evidence that would change the view:
- The owner must decide:

## Handoff
- Options:
- Next questions:
- Risks to monitor:
- Recommendation: [only if the evidence supports one]
```
