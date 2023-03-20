import cx from 'classnames';
import React from 'react';
import styles from './ColorPicker.module.scss';

interface Circle {
  color: string;
  selected: boolean;
  index: number;
  onSelect: (index: number) => void;
}

const Component: React.FC<Circle> = ({ index, color, selected, onSelect }) => {
  return (
    <div
      className={cx(styles.Circle, selected && styles.selecteds)}
      style={{ backgroundColor: color }}
      onClick={() => onSelect(index)}
    ></div>
  );
};

const ColorPicker = React.memo(Component);

export { ColorPicker };
