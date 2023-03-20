import cx from 'classnames';
import React from 'react';
import styles from './IconPicker.module.scss';

interface Circle {
  icon: () => JSX.Element;
  selected: boolean;
  onSelect: (index: number) => void;
  idx: number;
}

const Component: React.FC<Circle> = ({ icon, idx, selected, onSelect }) => {
  return (
    <div
      className={cx(styles.Circle, selected && styles.selecteds)}
      onClick={() => onSelect(idx)}
    >
      {icon()}
    </div>
  );
};

const IconPicker = React.memo(Component);

export { IconPicker };
