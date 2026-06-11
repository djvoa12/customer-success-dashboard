import type { Customer } from '$lib/types';

const companyPrefixes = [
  'Northwind',
  'Globex',
  'Initech',
  'Umbrella',
  'Wayne',
  'Stark',
  'Hooli',
  'Soylent',
  'Vehement',
  'Massive',
  'Bluewave',
  'Cloudline',
  'Nextgen',
  'Omni',
  'Hyperion'
];

const companySuffixes = [
  'Industries',
  'Systems',
  'Solutions',
  'Labs',
  'Analytics',
  'Networks',
  'Technologies',
  'Studios',
  'Works',
  'Group'
];

function pick<T>(arr: T[], seed: number) {
  return arr[seed % arr.length];
}

function hash(n: number) {
  // simple deterministic pseudo-random
  const x = Math.sin(n) * 10000;
  return x - Math.floor(x);
}

function randomInt(seed: number, min: number, max: number) {
  return Math.floor(hash(seed) * (max - min + 1)) + min;
}

function randomChoice<T>(seed: number, arr: T[]): T {
  return arr[randomInt(seed, 0, arr.length - 1)];
}

function makeDate(seed: number) {
  const daysAgo = randomInt(seed, 0, 365);
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString();
}

export const customers: Customer[] = Array.from({ length: 500 }, (_, i) => {
  const prefix = pick(companyPrefixes, i);
  const suffix = pick(companySuffixes, i * 3);
  const plan = randomChoice(i + 1, ['Free', 'Pro', 'Enterprise'] as const);
  const status = randomChoice(i * 7 + 1, ['Active', 'At Risk', 'Churned'] as const);
  return {
    id: `cust_${i + 1}`,
    companyName: `${prefix} ${suffix} ${i + 1}`,
    plan,
    users: randomInt(i * 11 + 1, 1, 5000),
    monthlyRevenue:
      plan === 'Free'
        ? 0
        : plan === 'Pro'
          ? randomInt(i * 13 + 1, 100, 5000)
          : randomInt(i * 17 + 1, 5000, 50000),
    healthScore: randomInt(i * 19 + 1, 0, 100),
    lastActiveAt: makeDate(i * 23 + 1),
    status
  };
});
