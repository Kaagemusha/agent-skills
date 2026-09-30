---
name: grounded-research
description: Answer an open research question by finding and inspecting relevant sources, prioritizing primary evidence, checking material claims, and separating findings from inference and unknowns. Use when no adequate source set is supplied.
license: MIT
---

# Grounded Research

## Purpose

Answer a question from inspectable evidence, not search snippets or recollection.
Find the smallest useful set of sources, show what each supports, and make
uncertainty visible so the reader can check the result.

## When to use

- The user asks an open factual or explanatory question and has not supplied
  an adequate source set.
- The answer depends on current, disputed, specialized, or consequential
  information that should be verified.

## When not to use

- The user supplied sources and wants a faithful short brief. Use Source Brief.
- A draft or decision already makes claims that need checking. Use Evidence
  Check.
- The task is a quick stable fact that can be answered reliably without
  research.
- No source can be inspected. State the access limit; do not present a search
  plan as a researched answer.

## Workflow

1. Define the question, the date or scope that matters, and what a useful
   answer must resolve. Split compound questions into checkable parts.
2. Search narrowly. Start with primary sources for direct facts, then use
   independent reliable sources to verify context, interpretation, or
   contested claims.
3. Open and inspect each source used. Search-result snippets, headlines, and
   summaries are leads, not evidence. Drop sources that do not support a
   material claim.
4. Compare the evidence. Distinguish independent confirmation from sources
   repeating the same announcement. Preserve material disagreements and
   distinguish an event date from a publication date.
5. Draft the answer around the evidence. Label direct findings, inference,
   and unknowns; narrow any claim the evidence only partly supports.
6. Check each material factual sentence against its cited source. Ensure the
   link opens the evidence itself and the citation supports the wording.
7. Stop when the question is resolved to the needed confidence or when
   additional searching is unlikely to change the answer. State what remains
   unresolved and why.

## Guardrails

- Never invent sources, quotations, dates, or access. If a source fails to
  load, say that and do not cite it as inspected.
- Prefer the original record for what an organization, person, or paper
  actually said or did. Use independent reporting for verification and
  context, not as a substitute when the primary source is available.
- Do not treat repetition as corroboration or absence of results as evidence
  that an event did not happen.
- Keep the search proportionate. Do not collect sources that add no new
  evidence or context.
- Research output does not authorize external actions or replace qualified
  review in high-stakes domains.

## Output

```markdown
# Research: [Question]

## Answer
[Direct answer, with scope and date where relevant]

## Findings
- [Finding]: [supported / inferred / unresolved]. [What inspected evidence
  establishes and any important limit.]

## Sources
- [Title](URL) | [publisher, date]: [specific claim it supports; primary
  or independent context]

## Limits
[Material access gaps, disagreements, or remaining unknowns; omit if none]

## Next check
[Only if one unresolved check could materially change the answer]
```
