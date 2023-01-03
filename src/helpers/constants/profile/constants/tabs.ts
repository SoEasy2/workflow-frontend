export type typeKey = 'PERSONAL_DETAILS' | 'PASSWORD' | 'SETTINGS';
type ITabsProfile = {
  [U in typeKey as string]: 'Personal details' | 'Password' | 'Settings';
};
export const tabsProfile: ITabsProfile = {
  PERSONAL_DETAILS: 'Personal details',
  PASSWORD: 'Password',
  SETTINGS: 'Settings',
};
