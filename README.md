# Frontend Developer Take-Home Assignment

## Overview

Build a small Customer Success Dashboard using Svelte, TypeScript, shadcn-svelte, and AG Grid.

The goal of this exercise is to evaluate how you structure a frontend application, manage state, and build a clean, maintainable user experience.

Expected completion time: **2–4 hours**.

---

## Requirements

### Technology

Please use:

- Latest Svelte
- TypeScript
- shadcn-svelte
- AG Grid

You may use additional libraries if you believe they add value, but please keep dependencies reasonable.

---

## Scenario

You are building an internal dashboard used by a Customer Success team.

The dashboard allows account managers to monitor customer accounts, review account health, and inspect customer details.

---

## Data

A customer dataset is provided.

Each customer has the following shape:

```ts
interface Customer = {
  id: string;
  companyName: string;
  plan: "Free" | "Pro" | "Enterprise";
  users: number;
  monthlyRevenue: number;
  healthScore: number; // 0-100
  lastActiveAt: string;
  status: "Active" | "At Risk" | "Churned";
};
```

---

## Features

### Dashboard Summary

Display summary metrics derived from the dataset.

At a minimum, include:

- Total Customers
- Total Monthly Revenue
- Active Customers
- At-Risk Customers

Feel free to add additional metrics if you think they improve the experience.

---

### Customer Table

Implement a customer table using AG Grid.

The table should support:

- Sorting
- Filtering
- Efficient browsing of the customer dataset
- Row selection
- Column resizing

Include the following columns:

- Company Name
- Plan
- Users
- Monthly Revenue
- Health Score
- Last Active Date
- Status

You may add additional columns if you think they are useful.

---

### Customer Details

When a customer is selected, display additional details using a dialog, sheet, side panel, or similar UI.

Present the information clearly and thoughtfully.

---

## User Experience

We value thoughtful UX and maintainable code over visual polish.

Consider:

- Responsive layouts
- Accessibility
- Empty states
- Clear formatting of dates, numbers, and currency

---

## Evaluation Criteria

We will evaluate:

- Code organization
- Component structure
- TypeScript usage
- Maintainability
- Readability
- State management
- User experience
- Attention to detail

We are not evaluating pixel-perfect design.

---

Good luck, and have fun building it.
