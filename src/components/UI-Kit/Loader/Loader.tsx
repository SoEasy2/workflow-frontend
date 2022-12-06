import React from 'react';
import styles from './Loader.module.scss';
import { createPortal } from 'react-dom';
interface IProps {
  isPortal?: boolean;
}
const Component: React.FC<IProps> = ({ isPortal = false }) => {
  const getElement = () => {
    if (isPortal)
      return createPortal(
        <div className={styles.portal}>
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
      <div className={styles.portal}>
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
