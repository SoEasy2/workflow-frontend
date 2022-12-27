import React, { PropsWithChildren } from 'react';
import cx from 'classnames';
import styles from './RegistrationLayout.module.scss';

interface ILayout {
  className?: string | null;
}

const Component: React.FC<PropsWithChildren<ILayout>> = ({ children, className }) => {
  return <div className={cx(styles.registration__layout, className)}>{children}</div>;
};

const RegistrationLayout = React.memo(Component);

export { RegistrationLayout };
