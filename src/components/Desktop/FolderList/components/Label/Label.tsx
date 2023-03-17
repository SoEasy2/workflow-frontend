import cx from 'classnames';
import React from 'react';
import { EnumLabelColors } from '../../../../../helpers/constants/enum/LabelColor';
import styles from './Label.module.scss';

interface ILabel {
  text: string;
  color: EnumLabelColors;
}

const Component: React.FC<ILabel> = ({ text, color }) => {
  const getColor = (number: EnumLabelColors) => {
    switch (number) {
      case EnumLabelColors.RED:
        return styles.red;
      case EnumLabelColors.GREEN:
        return styles.green;
    }
  };
  return <p className={cx(getColor(color), styles.Label)}>{text}</p>;
};

const Label = React.memo(Component);

export { Label };
