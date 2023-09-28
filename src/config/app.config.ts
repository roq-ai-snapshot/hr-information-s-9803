interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Administrator', 'Employee', 'Accountant'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View company information',
    'View personal user information',
    'View vacation details',
    'View payroll information',
  ],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage employees', 'Manage payroll'],
  getQuoteUrl: 'https://app.roq.ai/proposal/0c67d59d-c1f4-46a3-ab4d-ac0c722db1c3',
};
