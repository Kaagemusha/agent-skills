---
name: handoff
description: Prepare a concise, reliable handoff so another person or agent can continue a task without guessing. Use at a session boundary, pause, or transfer of ownership.
license: MIT
---

# Handoff

## Purpose

Leave the next person enough accurate context to take the next useful step.
A handoff is a map to the current state, not a narrative of everything that
happened.

## When to use

- A work session is ending and the task is not finished.
- Ownership of a task moves to another person or agent.
- You are receiving a handoff and need to decide what to trust before acting.

## When not to use

- The work is finished and someone needs to understand what changed. Use
  Nutshell.
- Someone needs a full project history or audit trail. A handoff keeps only
  what changes the next action.
- The work has not started. Use Brief To Work Order to define it.

## Prepare the handoff

1. Name the objective and the authoritative source of truth. If this note and
   that source disagree, identify which one governs.
2. State the current state and the single next concrete action.
3. Record constraints and decisions that still affect the work.
4. Name completed changes and where they can be inspected.
5. State what was actually checked and the result. Distinguish observed facts
   from beliefs, assumptions, and unverified claims.
6. Capture approaches ruled out only when knowing why will prevent repeated
   work.
7. State open questions, risks, and stop or rollback conditions.
8. Point to the live source of truth: relevant files, records, branch, revision,
   or system location. Do not copy private or sensitive material into the
   handoff unnecessarily.

Keep only details that change the next person's action or prevent a likely
mistake. Use absolute dates when time matters. Do not claim work is complete
because a previous agent said so.

## Receive a handoff

Read the handoff, then check its important claims against current state before
acting. Inspect the relevant source, change, or system directly. If the state
has changed, treat the handoff as stale and re-establish the current state
from the authoritative source. Never infer permission to write, publish,
contact someone, or take another external action from a handoff alone.

## Output shape

```markdown
# Handoff: [task] ([date])

## Objective and source of truth
[Goal and governing source]

## Current state and next action
[What is true now, then one concrete next step]

## Active constraints and decisions
[Only those that still affect action]

## Completed work and verification
[Changed items, checks run, and actual results]

## Open questions and risks
[Unknowns, blockers, stop or rollback conditions]

## Ground-truth pointers
[Paths, links, revision, or system location to inspect]
```
