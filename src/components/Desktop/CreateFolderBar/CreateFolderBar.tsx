import cx from 'classnames';
import React, { useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { animated } from 'react-spring';
import { folderColors2, folderIcons } from '../../../helpers/constants/enum';
import { ArrowHandleIcon } from '../../../helpers/icons';
import useOnClickOutside from '../../../hooks/clickOutside/useClickOutside';
import { BarLayout } from '../../UI-Kit/BarLayout';
import { CustomInput } from '../../UI-Kit/Inputs/CustomInput';
import { ColorPicker } from './components/ColorPicker';
import { IconPicker } from './components/IconPicker';

import styles from './CreateFolderBar.module.scss';

interface ICreateFolderBar {
  setOpen: (data: boolean) => void;
  style?: object;
}

const Component: React.FC<ICreateFolderBar> = ({ setOpen, style }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(contentRef, () => setOpen(false));

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<number>(0);
  const handleSelect = (color: string) => {
    setSelectedColor(color);
    console.log(`Выбран цвет: ${color}`);
  };
  const handleSelectIcon = (index: number) => {
    setSelectedIcon(index);
    console.log(`Выбран цвет: ${index}`);
  };

  return createPortal(
    <div className={styles.createFolderBar}>
      <animated.div style={{ ...style }}>
        <BarLayout innerRef={contentRef}>
          <div className={styles.createFolderBar__top}>
            <div className={styles.createFolderBar__close}>
              <div
                className={cx(styles.close)}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <ArrowHandleIcon />
              </div>
            </div>
            <div className={styles.createFolderBar__input}>
              <div
                className={styles.view}
                style={{ backgroundColor: selectedColor }}
              >
                {folderIcons[selectedIcon]()}
              </div>
              <CustomInput />
            </div>
          </div>

          <div
            className={cx(styles.createFolderBar__content, styles.createFolderBar__content_empty)}
          >
            <div className={styles.createFolderBar__apperience}>
              <h4 className={styles.createFolderBar__apperience_folderSettingsTittle}>
                apperience
              </h4>
              <div className={styles.createFolderBar__apperience_Picker}>
                {folderColors2.map((color) => (
                  <ColorPicker
                    key={useId()}
                    color={color}
                    selected={selectedColor === color}
                    onSelect={handleSelect}
                  />
                ))}
              </div>
              <div className={styles.createFolderBar__apperience_Picker}>
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
        </BarLayout>
      </animated.div>
    </div>,
    document.body,
  );
};

const CreateFolderBar = React.memo(Component);

export { CreateFolderBar };
