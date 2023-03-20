import React, { useId } from 'react';
import { folderColors2, folderIcons } from '../../../../../helpers/constants/enum';
import { ColorPicker } from './components/ColorPicker';
import { IconPicker } from './components/IconPicker';
import styles from './Picker.module.scss';

interface IPicker {
  handleSelect: (index: number) => void;
  handleSelectIcon: (index: number) => void;
  selectedColor: number;
  selectedIcon: number;
}
const Component: React.FC<IPicker> = ({
  handleSelect,
  handleSelectIcon,
  selectedColor,
  selectedIcon,
}) => {
  return (
    <div className={styles.Picker}>
      <div className={styles.Picker__apperience}>
        <h4 className={styles.Picker__apperience_folderSettingsTittle}>apperience</h4>
        <div className={styles.Picker__apperience_ColorPicker}>
          {folderColors2.map((color, index) => (
            <ColorPicker
              key={useId()}
              index={index}
              color={color}
              selected={selectedColor === index}
              onSelect={handleSelect}
            />
          ))}
        </div>
        <div className={styles.Picker__apperience_IconPicker}>
          {folderIcons.map((icon, index) => (
            <IconPicker
              key={useId()}
              icon={icon}
              idx={index}
              selected={selectedIcon === index}
              onSelect={handleSelectIcon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Picker = React.memo(Component);

export { Picker };
