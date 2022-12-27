import React, { PropsWithChildren } from 'react';
import styles from './Layout.module.scss';

const Component: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
const Layout = React.memo(Component);

export { Layout };
