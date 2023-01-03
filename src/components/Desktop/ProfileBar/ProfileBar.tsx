import React, { useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './ProfileBar.module.scss';
import { animated } from 'react-spring';
import { BarLayout } from '../../UI-Kit/BarLayout';
import cx from 'classnames';
import { ArrowHandleIcon } from '../../../helpers/icons';
import useOnClickOutside from '../../../hooks/clickOutside/useClickOutside';
import { Button } from '../../UI-Kit/Button';
import { ButtonTypes } from '../../../helpers/constants/enum';
import { personalProfileInputs, tabsProfile } from '../../../helpers/constants/profile/constants';
import { Layout } from '../Profile/Layout';
import { PersonalDetails } from '../Profile/Forms/PersonalDetails';
import { DatePicker } from 'antd';
interface IProfileBar {
  style?: object;
  setOpen: (data: boolean) => void;
}
type typeTab = 'Personal details' | 'Password' | 'Settings';
const Component: React.FC<IProfileBar> = ({ setOpen, style }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentTab, setCurrentTab] = useState<typeTab>(tabsProfile.PERSONAL_DETAILS);

  useOnClickOutside(contentRef, () => setOpen(false));

  return createPortal(
    <div className={styles.profileBar}>
      <animated.div style={{ ...style }}>
        <BarLayout
          innerRef={contentRef}
          className={styles.layout}
        >
          <div className={styles.profileBar__content}>
            <div className={styles.profileBar__head}>
              <div className={styles.profileBar__wrapper}>
                <div className={styles.profileBar__head__status}>
                  <div className={styles.status}>status</div>
                  <div
                    className={cx(styles.close)}
                    onClick={() => setOpen(false)}
                  >
                    <ArrowHandleIcon />
                  </div>
                </div>
                <div className={styles.profileBar__head__user}>
                  <div className={styles.profileBar__head__profile}>
                    <div className={styles.profileBar__head__img}>
                      <img
                        src='
                                        https://giffun.ru/wp-content/uploads/2019/04/kachat_krasivye_kartinki_na_telefon_besplatno_29_23075447-500x313.jpg
                                        '
                        alt='img'
                      />
                    </div>
                    <div className={styles.profileBar__head__username}>
                      <div className={styles.name}>Name Name</div>
                      <div className={styles.position}>Owner</div>
                    </div>
                  </div>
                  <div className={styles.profileBar__head__id}>ID: 0959595847</div>
                </div>
                <div className={styles.profileBar__head__tabs}>
                  {Object.keys(tabsProfile).map((key) => (
                    <button
                      key={useId()}
                      className={cx(
                        styles.profileBar__head__tab,
                        currentTab === tabsProfile[key] && styles.profileBar__head__tab_active,
                      )}
                      onClick={() => setCurrentTab(tabsProfile[key])}
                    >
                      {tabsProfile[key]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.profileBar__form}>
              <Layout>
                <PersonalDetails inputs={personalProfileInputs} />
                <DatePicker getPopupContainer={(triggerNode) => triggerNode} />
              </Layout>
            </div>
          </div>
          <div className={styles.profileBar__complete}>
            <div className={styles.profileBar__wrapper}>
              <Button
                onClick={() => console.log('CLICK')}
                text={'SAVE'}
                type={ButtonTypes.ACTIVE}
                className={styles.button}
              />
            </div>
          </div>
        </BarLayout>
      </animated.div>
    </div>,
    document.body,
  );
};
const ProfileBar = React.memo(Component);

export { ProfileBar };
