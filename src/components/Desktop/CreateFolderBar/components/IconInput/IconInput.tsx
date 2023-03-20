import React from 'react';
import { CustomInput } from '../../../../UI-Kit/Inputs/CustomInput';
import { folderColors2, folderIcons } from '../../mockData';
import styles from './IconInput.module.scss';

interface InputIcons {
  handleChangeInput: (string: string) => void;
  selectedColor: number;
  selectedIcon: number;
}
const Component: React.FC<InputIcons> = ({ selectedColor, selectedIcon, handleChangeInput }) => {
  return (
    <div className={styles.input}>
      <div
        className={styles.input__view}
        style={{ backgroundColor: folderColors2[selectedColor] }}
      >
        {folderIcons[selectedIcon]()}
      </div>
      <CustomInput handleChangeInput={handleChangeInput} />
    </div>
  );
};

const IconInput = React.memo(Component);

export { IconInput };
