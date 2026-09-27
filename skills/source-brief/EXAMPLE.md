# Source Brief: worked example

## Input

```text
Brief this for our leadership team. [A 1,400-word announcement from a
fictional company, Northwind Labs, about its new support assistant. Key
passages: the assistant "resolved 41% of tickets without a human" in a pilot
with three customers over six weeks; the company "expects" this to reach 60%
by next year; the pilot excluded billing and account-security tickets; one
pilot customer paused use after the assistant gave wrong refund information;
pricing is per resolved ticket, not per seat; general availability is
"planned for Q1 2027."]
```

## Output

```markdown
# Northwind Labs launches a support assistant priced per resolved ticket

## Summary
Northwind Labs says its new support assistant resolved 41% of tickets without
a human during a six-week pilot with three customers. The pilot excluded
billing and account-security tickets, and one customer paused use after wrong
refund answers. Pricing is per resolved ticket, and general availability is
planned for Q1 2027.

## Key points
- 41% of tickets were resolved without a human, in a pilot with three
  customers over six weeks.
- Billing and account-security tickets were excluded from the pilot.
- Pricing is charged per resolved ticket, not per seat.
- Northwind "expects" the resolution rate to reach 60% next year. This is a
  projection, not a result.

## Caveats
- The 41% comes from three customers and excludes the ticket types most
  likely to go wrong, so it may not hold for a full support queue.
- One pilot customer paused use after the assistant gave wrong refund
  information.

Source boundary: the source is the company's own announcement; no independent
figures were provided.
```

## What the fidelity check changed

- The first draft said the assistant "resolves 41% of tickets." The source
  reports a past pilot result, so it became "resolved... during a six-week
  pilot."
- The draft had dropped the excluded ticket types. The ledger flagged them as
  a condition on the 41%, so they came back.
- "Will reach 60%" became "expects... to reach 60%," matching the source's
  hedge.
