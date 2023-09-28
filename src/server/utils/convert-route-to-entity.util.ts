const mapping: Record<string, string> = {
  'business-owners': 'business_owner',
  companies: 'company',
  employees: 'employee',
  payrolls: 'payroll',
  users: 'user',
  vacations: 'vacation',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
