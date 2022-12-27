import React, { PropsWithChildren } from 'react';
import styles from './ModalLayout.module.scss';
import cx from 'classnames';

interface ILayout {
  className?: string | null;
}

const Component: React.FC<PropsWithChildren<ILayout>> = ({ children, className }) => {
  return <div className={cx(styles.layout, className)}>{children}</div>;
};
const ModalLayout = React.memo(Component);

export { ModalLayout };
