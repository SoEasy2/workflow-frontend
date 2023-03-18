import cx from 'classnames';
import React from 'react';
import styles from './Circle.module.scss';

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

const Circle = React.memo(Component);

export { Circle };
