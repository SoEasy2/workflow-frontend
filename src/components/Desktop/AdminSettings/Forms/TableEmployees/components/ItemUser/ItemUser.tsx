import React from 'react';
import styles from './ItemUser.module.scss';
import { SelectPermissionUser } from '../SelectPermissionUser/SelectPermissionUser';

const Component: React.FC = () => {
  return (
    <div className={styles.itemUser}>
      <div className={styles.itemUser__info}>
        <div className={styles.itemUser__img}>
          <img
            src='https://giffun.ru/wp-content/uploads/2019/04/kachat_krasivye_kartinki_na_telefon_besplatno_29_23075447-500x313.jpg'
            alt='profile img'
          />
        </div>
        <div className={styles.itemUser__name}>
          <div className={styles.name}>name</div>
          <div className={styles.email}>email</div>
        </div>
      </div>
      <div className={styles.itemUser__permissions}>
        <SelectPermissionUser />
      </div>
    </div>
  );
};
const ItemUser = React.memo(Component);

export { ItemUser };
