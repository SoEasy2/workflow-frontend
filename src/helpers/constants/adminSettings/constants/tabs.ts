export type typeKey = 'COMPANY_DETAILS' | 'ACCESSES_PERMISSIONS';
type IAdminSettings = {
  [U in typeKey as string]: 'Company details' | 'Accesses permissions';
};
export const tabsAdminSettings: IAdminSettings = {
  COMPANY_DETAILS: 'Company details',
  ACCESSES_PERMISSIONS: 'Accesses permissions',
};
