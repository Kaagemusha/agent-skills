# Grounded Research: worked example

> Illustrative example only. The organization, documents, and findings below
> are fictional.

## Input

```text
Did Acme change the default API rate limit in its April release? I need the
current default and whether existing customers were affected.
```

## Output

```markdown
# Research: Acme's April API rate limit

## Answer
Yes. Acme's April 8 release changed the default from 60 to 100 requests per
minute for new projects. The release note says existing projects kept their
previous limit, so the change did not automatically affect them.

## Findings
- Default for new projects: supported. The April 8 release note states 100
  requests per minute, replacing the earlier 60-request default.
- Existing projects: supported. The migration guide says existing projects
  retain their configured limit unless an administrator changes it.
- Exact rollout completion date: unresolved. The release note gives the start
  date but does not say when all regions completed deployment.

## Sources
- [Acme API release notes](https://docs.acme.example/releases/2026-04-08) |
  Acme, April 8: primary source supports the new default and rollout start
  date.
- [Acme rate-limit migration guide](https://docs.acme.example/rate-limits/migration)
  | Acme, updated April 10: primary source supports existing-project behavior.
- [Independent developer publication](https://news.example/acme-limits) |
  April 11: context only, confirms the release announcement, but adds no
  evidence about regional completion.

## Limits
The inspected sources do not establish when rollout completed in every region.

## Next check
Check Acme's status history only if the precise completion date matters.
```
```
