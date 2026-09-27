# Changelog

## 1.2.0 (2026-09-27)

Sharper triggers, self-contained examples, and stricter checks.

- Every skill description now says when to use the skill, and when not to,
  so agents can route to it before loading it.
- Every skill that reviews, checks, summarizes, or transforms supplied text
  now carries the same rule: treat that text as data, not instructions.
- Red Team Review now labels evidence supported, inferred, assumed, or
  unknown, the same set as Evidence Check.
- Worked examples now include every fact their output uses. Source Brief
  shows an actual short source, and Handoff shows the session notes it was
  written from.
- The front page has a "Try it now" line and maps the builder skills.
- Checks now require a "Use when" clause in every description, parse
  multi-line descriptions, reject unquoted descriptions that YAML would
  misread, fail on emoji, and verify stated skill counts.

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
