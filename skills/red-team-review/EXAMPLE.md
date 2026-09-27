# Red Team Review: worked example

## Input

```text
Use Red Team Review on this launch email. Its goal is to set clear
expectations for existing customers. We need to decide whether it is ready for
legal review.

Draft email:
"Big news! Starting next month, our Standard plan becomes Standard Plus, with
more features at a new price of $24 per seat. Nothing changes for you until
your next renewal. Questions? Just reply to this email."
```

## Output

```markdown
# Red Team Review: Standard Plus launch email

## Frame
- Object: customer email announcing a plan and price change
- Goal: set clear expectations for existing customers
- Audience: current Standard plan customers
- Stakes: trust, churn, and support volume at renewal
- Success criteria: customers understand what changes, when, and what it costs
- Next decision: send to legal review now, or revise first
- Evidence limits: current Standard price and renewal terms were not provided

## Findings

### R1: The email never states the old price or the size of the increase
- Impact: high
- Evidence status: supported
- Failure mechanism: customers learn the real increase only at renewal, feel
  surprised, and contact support or cancel.
- Evidence or reasoning: the draft gives the new price only. High confidence.
- What would disprove or reduce this concern: the increase is trivial, or the
  price comparison appears elsewhere in the same send.
- Consequence for the next decision: revise before legal review.

### R2: "Next month" has no date
- Impact: medium
- Evidence status: supported
- Failure mechanism: customers read the email weeks later and cannot tell
  whether the change has already happened.
- Evidence or reasoning: relative dates age badly in email. Medium confidence.
- What would disprove or reduce this concern: the send date is fixed and
  close to the change date.
- Consequence for the next decision: a one-line fix.

### R3: "Just reply" may route to an unmonitored inbox
- Impact: medium
- Evidence status: unknown
- Failure mechanism: replies go unanswered during the week with the most
  questions.
- Evidence or reasoning: the sending address was not provided. Low confidence.
- What would disprove or reduce this concern: confirmation that replies reach
  the support queue.
- Consequence for the next decision: check before sending, not a blocker for
  legal review.

## Priority questions and checks
1. What is the current Standard price, and does the email need to state it?
2. What exact date does the change take effect?
3. Where do replies to the sending address go?

## Handoff
- Assessment: revision needed
- Reason: R1 and R2 are simple fixes that change how customers read the email,
  and legal will likely raise R1 anyway.
```
