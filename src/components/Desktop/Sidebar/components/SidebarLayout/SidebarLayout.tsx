import React, { PropsWithChildren } from 'react';
import styles from './SidebarLayout.module.scss';
import cx from 'classnames';
interface ISidebarLayout {
  classNameLayout?: string;
}
const Component: React.FC<PropsWithChildren<ISidebarLayout>> = ({ classNameLayout, children }) => {
  return <div className={cx(styles.sidebar__layout, classNameLayout)}>{children}</div>;
};

const SidebarLayout = React.memo(Component);

export { SidebarLayout };
