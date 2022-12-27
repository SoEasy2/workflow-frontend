import React from 'react';
import styles from './Header.module.scss';
import { LogoIcon } from '../../../../helpers/icons';
import { Button } from '../../../UI-Kit/Button';
import { ButtonTypes } from '../../../../helpers/constants/enum';
import { useNavigate } from 'react-router';

const Component: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({
      pathname: '/login',
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <LogoIcon />
        <Button
          type={ButtonTypes.ACTIVE}
          text={'Sign in'}
          className={styles.button}
          onClick={handleClick}
        />
      </div>
    </header>
  );
};
const Header = React.memo(Component);

export { Header };
