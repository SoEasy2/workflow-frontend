import React from 'react';
import { folderColors2, folderIcons } from '../../../../../helpers/constants/enum';
import { CustomInput } from '../../../../UI-Kit/Inputs/CustomInput';
import styles from './IconInput.module.scss';

interface InputIcons {
  selectedColor: number;
  selectedIcon: number;
}
const Component: React.FC<InputIcons> = ({ selectedColor, selectedIcon }) => {
  return (
    <div className={styles.input}>
      <div
        className={styles.input__view}
        style={{ backgroundColor: folderColors2[selectedColor] }}
      >
        {folderIcons[selectedIcon]()}
      </div>
      <CustomInput />
    </div>
  );
};

const IconInput = React.memo(Component);

export { IconInput };