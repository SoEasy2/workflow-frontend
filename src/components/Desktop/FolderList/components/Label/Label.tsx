import cx from 'classnames';
import React, { useCallback } from 'react';
import { EnumLabelColors } from '../../../../../helpers/constants/enum/LabelColor';
import styles from './Label.module.scss';

interface ILabel {
  text: string;
  color: EnumLabelColors;
  className?: string;
}

const Component: React.FC<ILabel> = ({ text, color, className }) => {
  const getColor = useCallback(
    (color: EnumLabelColors): string => {
      switch (color) {
        case EnumLabelColors.RED:
          return styles.red;
        case EnumLabelColors.GREEN:
          return styles.green;
        default:
          return '';
      }
    },
    [color],
  );
  return <p className={cx(styles.Label, getColor(color), className)}>{text}</p>;
};

const Label = React.memo(Component);

export { Label };
