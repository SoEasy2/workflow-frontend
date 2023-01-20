import React from 'react';
import styles from './TableEmployees.module.scss';
import { ItemUser } from './components/ItemUser';
import cx from 'classnames';
import { Button } from '../../../../UI-Kit/Button';
import { ButtonTypes } from '../../../../../helpers/constants/enum';

const Component: React.FC = () => {
  return (
    <div className={styles.tableEmployees}>
      <div className={styles.head}>
        <div className={cx(styles.head__text, styles.head__text_employee)}>Employees</div>
        <div className={cx(styles.head__text, styles.head__text_permission)}>
          Accesses permissions
        </div>
      </div>
      <div className={styles.content}>
        <ItemUser />
        <ItemUser />
        <ItemUser />
        <ItemUser />
        <ItemUser />
        <ItemUser />
        <ItemUser />
        <ItemUser />
        <ItemUser />
        <ItemUser />
        <ItemUser />
        <ItemUser />
        <ItemUser />
      </div>
      <div className={styles.tableEmployees__complete}>
        <div className={styles.tableEmployees__wrapper}>
          <Button
            onClick={() => console.log('click')}
            text={'Save changes'}
            type={ButtonTypes.ACTIVE}
            className={styles.button}
          />
        </div>
      </div>
    </div>
  );
};
const TableEmployees = React.memo(Component);

export { TableEmployees };
