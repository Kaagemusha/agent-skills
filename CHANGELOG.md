# Changelog

## 1.1.0 (2026-09-27)

Five new skills, each with a worked example.

- Decision Deliberation: prepare a consequential choice with five lenses, a
  tension map, and options for the decision owner.
- Source Brief: compress sources into a short brief, with a preservation list
  before drafting and a sentence-by-sentence fidelity check after.
- Eval Viability Check: four gates (determinacy, leakage, baseline, power)
  before building any eval or model-as-judge task, plus a rule for scarce
  labels: synthesize inputs, never labels.
- Retrievable Writing: write knowledge-base notes that survive being loaded
  one section at a time.
- Skill Or Not: decide whether a reused prompt should become a skill, and at
  which layer.
- The front page now groups skills into everyday work and building agent
  systems.
- Red Team Review now sends decisions among several candidate plans to
  Decision Deliberation.

## 1.0.0 (2026-09-27)

First release as a single repository. The five skills were previously
published as separate gists on 2026-09-22.

- Skills: Brief To Work Order, Evidence Check, Red Team Review, Handoff,
  Nutshell.
- Every skill now shares one structure: Purpose, When to use, When not to use,
  its method, and an Output section.
- Every skill has a worked example.
- Nutshell and Red Team Review now declare their MIT license in the skill
  header, like the others.
- Installable with `npx skills add` or as a Claude Code plugin.
- Automated checks for skill structure and public safety.
