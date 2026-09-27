# Nutshell: worked example

## Input

```text
Work completed and verified:
- The nightly invoice export now retries up to three times when the accounting
  system does not respond, instead of failing silently.
- A daily check compares invoices sent against invoices recorded and alerts the
  finance channel on any mismatch.
- Tested by blocking the connection during a run: the export retried and
  finished. A forced mismatch triggered the alert within five minutes.

Write the nutshell.
```

## Output

**Nutshell:** Invoices used to go missing from the books when the accounting
system was briefly unavailable overnight, and nobody noticed until month-end.
Now the export tries again on its own, and a daily comparison warns the finance
team the same day if anything still fails to arrive. We tested both by
deliberately breaking the connection. Missing invoices are now caught within a
day rather than weeks later, though a long outage could still need a person to
step in.

## What the skill avoided

- Jargon such as "export job," "retry logic," or "reconciliation" in the
  paragraph itself.
- A list of changed files or steps.
- Claiming invoices can "never" go missing.
