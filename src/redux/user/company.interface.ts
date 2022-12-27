import { EmployeesCount } from '../../helpers/constants/company/enum/employeesCount';

export interface ICompany {
  id: string;

  name: string;

  user: string;

  targetUser: Array<string>;

  amountOfEmployees: EmployeesCount;

  createdAt: Date;

  updatedAt: Date;
}
