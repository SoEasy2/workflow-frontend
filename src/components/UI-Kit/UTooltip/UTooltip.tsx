import React from 'react';
import { IUTooltip } from './interface';
import '../../../sass/_abstract/_transition.scss';
import { animated } from 'react-spring';
import styles from './UTooltip.module.scss';
import { createPortal } from 'react-dom';
const Component: React.FC<IUTooltip> = ({ style, offset }) => {
  return createPortal(
    <animated.div
      style={{ ...style, top: `${offset.top}px`, left: `${offset.left}px` }}
      className={styles.tooltip}
    >
      test
    </animated.div>,
    document.body,
  );
};
const UTooltip = React.memo(Component);

export { UTooltip };
