import React from 'react';
import styles from './Label.module.scss';

interface ILabel {
  text: string;
  color: string;
  bgColor: string;
}

const Component: React.FC<ILabel> = ({ text, color, bgColor }) => {
  return (
    <p
      className={styles.Label}
      style={{ color: color, backgroundColor: bgColor }}
    >
      {text}
    </p>
  );
};

const Label = React.memo(Component);

export { Label };
