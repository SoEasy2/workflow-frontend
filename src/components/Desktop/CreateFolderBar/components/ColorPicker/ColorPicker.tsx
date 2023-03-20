import cx from 'classnames';
import React from 'react';
import styles from './ColorPicker.module.scss';

interface Circle {
  color: string;
  selected: boolean;
  onSelect: (color: string) => void;
}

const Component: React.FC<Circle> = ({ color, selected, onSelect }) => {
  return (
    <div
      className={cx(styles.Circle, selected && styles.selecteds)}
      style={{ backgroundColor: color }}
      onClick={() => onSelect(color)}
    ></div>
  );
};

const ColorPicker = React.memo(Component);

export { ColorPicker };
