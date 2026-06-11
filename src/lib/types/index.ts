export interface Customer {
  id: string;
  companyName: string;
  plan: 'Free' | 'Pro' | 'Enterprise';
  users: number;
  monthlyRevenue: number;
  healthScore: number; // 0-100
  lastActiveAt: string;
  status: 'Active' | 'At Risk' | 'Churned';
}
