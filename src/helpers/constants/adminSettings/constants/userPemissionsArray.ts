import { IOption } from '../../../../components/Desktop/AdminSettings/Forms/TableEmployees/components/SelectPermissionUser/components/Option/types';
import { UserPermissions } from '../enum';

export const userPermissionsArray: IOption[] = [
  {
    title: 'Admin',
    description: 'Can view and edit only in folders assigned to them, attach files.',
    value: UserPermissions.ADMIN,
  },
  {
    title: 'Member',
    description:
      'Can view, comment and attach files only without edit in folders assigned to them.',
    value: UserPermissions.MEMBER,
  },
];
