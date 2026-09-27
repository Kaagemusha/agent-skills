# Evidence Check: worked example

## Input

```text
Use Evidence Check on this memo. We need to decide whether to approve a
three-month pilot with Vendor B.

Memo excerpt:
"Switching to Vendor B will cut our support costs by 30%. Vendor B is SOC 2
certified. Our customers prefer chat over phone, so Vendor B's chat-first
product fits how they already reach us."

Sources provided:
- Vendor B pricing sheet, dated March 2026, marked "list price." Per-seat
  table: $49 per agent seat per month. We pay our current vendor $70.
- Vendor B website trust page: a "SOC 2" badge. No report, report type, or
  audit date is listed.
- Our Q2 2026 support survey, 212 responses. Question 7, "How do you prefer
  to contact support?": chat 58%, email 27%, phone 15%.
```

## Output

```markdown
# Evidence Check: Vendor B pilot memo

## Decision supported
Whether to approve a three-month pilot with Vendor B.

## Claims

| Claim | Status | Evidence and location | Confidence | Decision effect |
|---|---|---|---|---|
| Vendor B will cut support costs by 30% | inferred | Pricing sheet, per-seat table: $49 list price per seat against our $70, which is 30% lower. Says nothing about volume, onboarding, or migration costs. | low | High. The saving is on seat price only, not total cost. |
| Vendor B is SOC 2 certified | assumed | Trust page shows a SOC 2 badge. No report, type, or audit date was provided. | low | Medium. Needed before any customer data moves. |
| Customers prefer chat over phone | supported | Q2 survey, question 7: 58% chose chat as their preferred channel. | medium | Low for a pilot. |
| Chat-first fits how customers already reach us | unknown | The survey asks about preference, not actual contact volume by channel. | low | Medium. Preference and behavior can differ. |

## Conflicts and limits
- The pricing sheet is dated March 2026 and marked "list price."
- The survey covers customers who answered it, which may skew toward engaged
  users.

## Next checks
1. Request Vendor B's current SOC 2 Type II report and its audit period.
2. Pull last quarter's contact volume by channel from the support system.
3. Ask Vendor B for a total-cost quote at our actual seat count and volume.

## Assessment
The evidence supports a narrow, time-boxed pilot but not the 30% cost claim.
Treat that figure as an upper bound on seat price until a real quote arrives.
Confirm SOC 2 before any customer data is shared.
```
