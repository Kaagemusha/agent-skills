# Eval Viability Check

Check whether an evaluation can measure anything before you build it. Four
gates run in order, cheapest and most fatal first:

1. **Determinacy:** can an expert get the label from the input alone?
2. **Leakage:** does the input give the label away?
3. **Baseline:** what does always guessing the common class score?
4. **Power:** is the test set big enough to detect the difference you care
   about?

It also covers what to do when labels are scarce: construct new inputs and
have an expert label them, never invent the labels.

The gates come from real failures: a task whose answer was decided after the
input was frozen, a perfect score caused by the label sitting in the input,
and an "improvement" that stayed below a constant guess.

- Instructions: [SKILL.md](SKILL.md)
- Worked example: [EXAMPLE.md](EXAMPLE.md)

Install only this skill:

```bash
npx skills add Kaagemusha/agent-skills --skill eval-viability-check
```

Acknowledgment: several annotation practices, such as delaying pattern-finding
until a few cases are annotated and stopping at saturation, were informed by
the public [evals-skills](https://github.com/ai-evals-course/evals-skills)
repository from the AI Evals course. No text was copied; the gate order and
wording are our own.
