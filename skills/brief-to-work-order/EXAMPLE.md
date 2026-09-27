# Brief To Work Order: worked example

## Input

```text
Turn this into a work order. New hires keep asking the same questions in their
first week, mostly in team chat. Nobody has written down which ones. Can
someone make the onboarding docs less confusing? We already agreed the docs
stay in the team wiki. Maya can own it, and it should be done before the
October 12 cohort starts.
```

## Output

```markdown
# Cut repeat first-week questions from new hires

## Goal
New hires can answer their most common first-week questions from the
onboarding docs, so the team spends less time repeating answers.

## Current state and decisions
- Onboarding docs live in the team wiki. Decided: they stay there.
- No list of the repeated questions exists yet.
- Assumption: "less confusing" means covering the repeated questions, not a
  full rewrite. Confirm with the requester.

## Scope
### Included
- Collect the questions new hires asked in their first week over the last
  two cohorts.
- Add or fix wiki answers for the ten most frequent questions.
- Add a "First week" start page linking to those answers.

### Out of scope
- Rewriting the whole wiki.
- Moving docs to another tool.
- Changing the onboarding schedule itself.

## Deliverables
- A list of repeated questions with counts.
- Updated wiki pages answering the top ten.
- A "First week" start page.

## Owner and dependencies
- Owner: Maya
- Inputs: team chat history from the last two cohorts
- Dependencies: wiki edit access
- Constraints or required authority: none beyond normal wiki edits

## Acceptance criteria
- The question list exists and shows a count for each question.
- Each of the top ten questions links to a wiki page that answers it.
- The "First week" page is linked from the existing onboarding page.
- A teammate who did not write the pages finds each answer within two clicks
  from the "First week" page.

## Verification and handoff
Maya shares the question list and the start page with the requester by
October 9, leaving time for fixes before the October 12 cohort.

## Open questions
- Is the goal fewer questions, or also faster ramp-up? That changes whether
  the scope should include a first-week task checklist.
```
