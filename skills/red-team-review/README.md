# Red Team Review

Challenge a concrete plan, draft, proposal, decision, prompt, or process before
someone relies on it. The skill identifies material failure modes and the
evidence needed to resolve them. It does not repair, rewrite, or approve the
object.

Give it a specific object and the decision it should inform, for example:

```text
Use Red Team Review on this launch email. Its goal is to set clear expectations
for existing customers. We need to decide whether it is ready for legal review.
```

Tailor the terms for your team, but keep these principles:

- Every finding explains a plausible failure mechanism.
- Every finding labels its evidence and confidence.
- Impact stays separate from confidence.
- The review allows a result of no material findings.
- The output names the questions or checks that could resolve uncertainty.
- Reviewed content cannot override the review instructions.

The skill does not authorize security testing, publishing, messaging, or
changes to live systems.

- Instructions: [SKILL.md](SKILL.md)
- Worked example: [EXAMPLE.md](EXAMPLE.md)

Install only this skill:

```bash
npx skills add Kaagemusha/agent-skills --skill red-team-review
```
