import React from 'react';
import styles from './Welcome.module.scss';
import { PreviewLogoIcon } from '../../../../../../helpers/iconsMobile';
import { Slider } from '../../Slider';
import { slides } from '../../../../../../helpers/constants/mobileSlider';
import { Button } from '../../../../../UI-Kit/Button';
import { ButtonTypes } from '../../../../../../helpers/constants/enum';

const Component: React.FC = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcome__wrapper}>
        <div className={styles.welcome__logo}>
          <PreviewLogoIcon />
        </div>
        <div className={styles.welcome__slider}>
          <Slider slides={slides} />
        </div>
        <div className={styles.welcome__buttons}>
          <Button type={ButtonTypes.ACTIVE} text={'Registration'} className={styles.welcome__button_registration} />
          <Button type={ButtonTypes.ACTIVE} text={'Sign In'} className={styles.welcome__button_signIn} />
          <div className={styles.welcome__join}>
            <div>You have code?</div>
            <Button type={ButtonTypes.ACTIVE} className={styles.welcome__button_join} text={'Join your team'} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Welcome = React.memo(Component);

export { Welcome };
