import React from 'react';
import styles from './Loader.module.scss';
import { createPortal } from 'react-dom';
import cx from 'classnames';
interface IProps {
  isPortal?: boolean;
  isBackground?: boolean;
}
const Component: React.FC<IProps> = ({ isPortal = false, isBackground = false }) => {
  const getElement = () => {
    if (isPortal)
      return createPortal(
        <div className={cx(styles.portal, isBackground && styles.background)}>
          <div className={styles.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>,
        document.body,
      );
    return (
      <div className={cx(styles.portal, styles.background)}>
        <div className={styles.ldsRing}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  };
  return getElement();
};

const Loader = React.memo(Component);

export { Loader };
