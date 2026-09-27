# Decision Deliberation: worked example

## Input

```text
Run Decision Deliberation. We are a 12-person marketing agency. Should we
build our own AI tool for client reporting, or keep paying for the reporting
product we use now? I decide by the end of the quarter. We pay about $1,400 a
month for the current product, and two of our staff can code.
```

## Output

```markdown
# Decision Deliberation: Build our own reporting tool or keep buying

## Orientation
- Question: build an in-house AI reporting tool, or keep the current product
- Stakes: staff time, client-facing report quality, about $17,000 a year
- Horizon: decision this quarter, consequences over two to three years
- Decision owner: the agency's managing partner
- Evidence available: current cost, two staff who can code
- Evidence missing: hours spent on reports today, client complaints about
  reports, what the two coders would stop doing
- Useful output: a clear list of options and what to find out before choosing

## Lenses
### Incentives
- Finding: the two coders may want to build it because it is interesting work.
- Risk: enthusiasm substitutes for a business case.
- Better question: would we build this if it had to be maintained by someone
  who did not want to?
### System boundaries
- Finding: reporting touches client data access, branding, and delivery
  deadlines.
- Risk: the build covers report generation but not data connections, which
  is where most breakage happens.
- Better question: which data sources would the tool have to connect to, and
  who fixes them when they change?
### Historical patterns
- Finding: small firms that build internal tools often underestimate upkeep.
- Risk: a working first version hides a long tail of fixes.
- Better question: what has happened to the last internal tool we built?
### Second-order effects
- Finding: owning the tool could become a product to sell to other agencies.
- Risk: the side project pulls the coders off billable work.
- Better question: what client work gets delayed during the build?
### Cognitive bias
- Finding: the $1,400 monthly fee is vivid; the coders' time is not.
- Risk: comparing a visible cost against an invisible one.
- Better question: what is one coder-month worth in billable hours?

## Named voices
None used. The five lenses were sufficient.

## Tension map
- Action-blocking: no estimate of the coders' time against the $17,000 a year.
- Decision-relevant: control over report quality against maintenance burden.
- Watch-only: the idea of selling the tool later.

## Refusals and limits
- The evidence cannot yet show that building is cheaper. The coders' time is
  unpriced.

## Judgment check
- Clear: the decision turns on the coders' time, not the subscription fee.
- Plausible but unproven: an in-house tool would produce better reports.
- Unresolved: who owns maintenance after launch.
- Evidence that would change the view: a two-week time log of report work,
  and a build estimate from the coders.
- The owner must decide: whether report quality is a differentiator worth
  owning.

## Handoff
- Options: keep buying; run a two-week prototype with a hard stop; build fully.
- Next questions: how many hours a month go into reports today?
- Risks to monitor: data-connection breakage, billable hours lost.
- Recommendation: gather the time log before choosing. The evidence does not
  yet support building.
```
