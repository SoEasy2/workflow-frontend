import React from 'react';
import styles from './Preview.module.scss';
import { createPortal } from 'react-dom';
import { animated } from 'react-spring';
import { IPreview } from './interface';
import { PreviewLogoIcon } from '../../../helpers/iconsMobile';

const Component: React.FC<IPreview> = ({ style }) => {
  return createPortal(
    <animated.div
      style={{ ...style }}
      className={styles.preview}
    >
      <div className={styles.preview__logo}>
        <PreviewLogoIcon />
      </div>
    </animated.div>,
    document.body,
  );
};

const Preview = React.memo(Component);

export { Preview };
