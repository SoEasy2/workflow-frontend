import React, { PropsWithChildren, RefObject } from 'react';
import styles from './BarLayout.module.scss';
import cx from 'classnames';

interface IBarLayout {
  className?: string;

  innerRef?: RefObject<HTMLDivElement> | null;
}
const Component: React.FC<PropsWithChildren<IBarLayout>> = ({ children, className, innerRef }) => {
  return (
    <div
      className={cx(styles.barLayout, className)}
      ref={innerRef}
    >
      {children}
    </div>
  );
};

const BarLayout = React.memo(Component);

export { BarLayout };
