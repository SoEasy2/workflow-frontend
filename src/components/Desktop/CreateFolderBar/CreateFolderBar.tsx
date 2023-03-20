import cx from 'classnames';
import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { animated } from 'react-spring';
import { ArrowHandleIcon } from '../../../helpers/icons';
import useOnClickOutside from '../../../hooks/clickOutside/useClickOutside';
import { BarLayout } from '../../UI-Kit/BarLayout';
import { Button } from '../Authentication/Button';
import { FolderType } from './components/FolderType';
import { IconInput } from './components/IconInput';
import { Picker } from './components/Picker';

import styles from './CreateFolderBar.module.scss';

interface ICreateFolderBar {
  setOpen: (data: boolean) => void;
  style?: object;
}

const Component: React.FC<ICreateFolderBar> = ({ setOpen, style }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(contentRef, () => setOpen(false));

  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [selectedIcon, setSelectedIcon] = useState<number>(0);
  const [selectedFolderType, setSelecteFolderType] = useState<number>(0);

  const handleSelect = (index: number) => {
    setSelectedColor(index);
    console.log(`Выбран цвет: ${index}`);
  };
  const handleSelectIcon = (index: number) => {
    setSelectedIcon(index);
    console.log(`Выбран иконка под номером: ${index}`);
  };
  const handleSelectType = (index: number) => {
    setSelecteFolderType(index);
    console.log(`Выбрана папка: ${index}`);
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
            <IconInput
              selectedColor={selectedColor}
              selectedIcon={selectedIcon}
            />
          </div>

          <div className={styles.createFolderBar__content}>
            <Picker
              handleSelect={handleSelect}
              handleSelectIcon={handleSelectIcon}
              selectedColor={selectedColor}
              selectedIcon={selectedIcon}
            />
            <FolderType
              handleSelect={handleSelectType}
              selectedFolderType={selectedFolderType}
            />

            <Button
              text='Create folder'
              onClick={() => console.log('created folder')}
              disabled={false}
            />
          </div>
        </BarLayout>
      </animated.div>
    </div>,
    document.body,
  );
};

const CreateFolderBar = React.memo(Component);

export { CreateFolderBar };
