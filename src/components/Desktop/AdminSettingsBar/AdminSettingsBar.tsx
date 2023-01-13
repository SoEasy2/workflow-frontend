import React, { useId, useRef, useState } from 'react';
import { personalProfileInputs, settingInputs } from '../../../helpers/constants/profile/constants';
import { useAppSelector } from '../../../hooks/redux';
import useOnClickOutside from '../../../hooks/clickOutside/useClickOutside';
import { createPortal } from 'react-dom';
import styles from './AdminSettingsBar.module.scss';
import { animated } from 'react-spring';
import { BarLayout } from '../../UI-Kit/BarLayout';
import cx from 'classnames';
import { ArrowHandleIcon } from '../../../helpers/icons';
import { Layout } from '../Profile/Layout';
import { PersonalDetails } from '../Profile/Forms/PersonalDetails';
import { Settings } from '../Profile/Forms/Settings';
import { tabsAdminSettings } from '../../../helpers/constants/adminSettings/constants';
import { CompanyDetails } from '../AdminSettings/Forms/CompanyDetails';
import { companyDetails } from '../../../helpers/constants/adminSettings/constants/inputs';

interface IAdminSettingsBar {
  style?: object;
  setOpen: (data: boolean) => void;
}
type typeTab = 'Company details' | 'Accesses permissions';
const Component: React.FC<IAdminSettingsBar> = ({ style, setOpen }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentTab, setCurrentTab] = useState<typeTab>(tabsAdminSettings.COMPANY_DETAILS);

  const { user } = useAppSelector((state) => state.user);

  useOnClickOutside(contentRef, () => setOpen(false));

  return createPortal(
    <div className={styles.settingsBar}>
      <animated.div style={{ ...style }}>
        <BarLayout
          innerRef={contentRef}
          className={styles.layout}
        >
          <div className={styles.settingsBar__content}>
            <div className={styles.settingsBar__head}>
              <div className={styles.settingsBar__wrapper}>
                <div className={styles.settingsBar__head__status}>
                  <div
                    className={cx(styles.close)}
                    onClick={() => setOpen(false)}
                  >
                    <ArrowHandleIcon />
                  </div>
                </div>
                <div className={styles.settingsBar__head__user}>
                  <div className={styles.settingsBar__head__profile}>
                    <div className={styles.settingsBar__head__img}>
                      <img
                        src='
                                        https://giffun.ru/wp-content/uploads/2019/04/kachat_krasivye_kartinki_na_telefon_besplatno_29_23075447-500x313.jpg
                                        '
                        alt='img'
                      />
                    </div>
                    <div className={styles.settingsBar__head__username}>
                      <div className={styles.name}>{user?.currentCompany?.name}</div>
                      <div className={styles.position}>{user?.username}</div>
                    </div>
                  </div>
                  <div className={styles.settingsBar__head__id}>ID: 0959595847</div>
                </div>
                <div className={styles.settingsBar__head__tabs}>
                  {Object.keys(tabsAdminSettings).map((key) => (
                    <button
                      key={useId()}
                      className={cx(
                        styles.settingsBar__head__tab,
                        currentTab === tabsAdminSettings[key] &&
                          styles.settingsBar__head__tab_active,
                      )}
                      onClick={() => setCurrentTab(tabsAdminSettings[key])}
                    >
                      {tabsAdminSettings[key]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.settingsBar__form}>
              <Layout className={styles.formLayout}>
                {(() => {
                  switch (currentTab) {
                    case tabsAdminSettings.COMPANY_DETAILS:
                      return <CompanyDetails inputs={companyDetails} />;
                    case tabsAdminSettings.ACCESSES_PERMISSIONS:
                      return <Settings inputs={settingInputs} />;
                    default:
                      return <PersonalDetails inputs={personalProfileInputs} />;
                  }
                })()}
              </Layout>
            </div>
          </div>
        </BarLayout>
      </animated.div>
    </div>,
    document.body,
  );
};
const AdminSettingsBar = React.memo(Component);

export { AdminSettingsBar };
