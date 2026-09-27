---
name: brief-to-work-order
description: Turn a request, rough brief, or agreed plan into a bounded work order with clear scope, deliverables, ownership, and checkable acceptance criteria. Use when someone is ready to assign execution.
license: MIT
---

# Brief To Work Order

## Purpose

Convert intent into an assignment someone can execute and a requester can
judge. Preserve decisions already made. Surface missing choices that could
change the work instead of silently making them.

## When to use

- A request, brief, or agreed plan is ready to be handed to someone for
  execution.
- A task keeps being misunderstood because its scope or finish line is vague.
- Work is being passed between people or agents and needs checkable
  acceptance criteria.

## When not to use

- The direction is still undecided. Explore options or run a Red Team Review
  first; a work order should not make the strategic choice.
- The task is small enough that one clear sentence already covers it.
- Someone wants a status update or a record of finished work. Use Handoff or
  Nutshell instead.

## Workflow

1. Identify the intended outcome, audience or user, current state, and reason
   for the work.
2. Separate agreed decisions from assumptions and unresolved choices. Ask a
   focused question when an unresolved choice would materially change scope,
   cost, risk, or deliverables. Otherwise state a reasonable assumption.
3. Define the smallest useful scope. Say what is included and explicitly name
   important exclusions.
4. Name the owner, inputs, dependencies, constraints, and required authority.
   Do not treat a work order as permission for external actions that the user
   has not authorized.
5. Describe concrete deliverables and atomic acceptance criteria. Each
   criterion should be one observable pass/fail check. Split compound criteria.
   A proposed check is not a completed result.
6. Include verification and handoff expectations that fit the risk. Do not add
   process or ceremony without a reason.
7. Read the work order as the implementer. Remove ambiguity about what to do
   next, what not to do, and how completion will be recognized.

## Guardrails

- Do not convert a suggestion into an approved decision.
- Do not hide uncertainty inside confident scope language.
- Do not write acceptance criteria such as "works well" or "tests pass" unless
  the observable condition and relevant test are named.
- Do not broaden the work just to make the document feel complete.

## Output shape

```markdown
# [Outcome-oriented title]

## Goal
[Who needs what outcome and why]

## Current state and decisions
[Relevant facts and settled choices]

## Scope
### Included
- [Bounded work]

### Out of scope
- [Explicit exclusions]

## Deliverables
- [Concrete artifact or result]

## Owner and dependencies
- Owner:
- Inputs:
- Dependencies:
- Constraints or required authority:

## Acceptance criteria
- [One binary, observable check per line]

## Verification and handoff
[Checks, evidence, and recipient needs]

## Open questions
[Only decisions that still need an answer]
```
