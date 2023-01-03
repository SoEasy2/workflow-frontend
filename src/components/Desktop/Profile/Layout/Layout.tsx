import React, { PropsWithChildren } from 'react';
import cx from 'classnames';
import styles from './Layout.module.scss';

interface ILayout {
  className?: string;
}
const Component: React.FC<PropsWithChildren<ILayout>> = ({ className, children }) => {
  return <div className={cx(styles.layout, className)}>{children}</div>;
};
const Layout = React.memo(Component);

export { Layout };
