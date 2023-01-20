import React, { useRef, useState } from 'react';
import styles from './SelectPermissionUser.module.scss';
import { HelperOpenSelectIcon } from '../../../../../../../helpers/icons';
import cx from 'classnames';
import useOnClickOutside from '../../../../../../../hooks/clickOutside/useClickOutside';
import { Option } from './components/Option';
import { userPermissionsArray } from '../../../../../../../helpers/constants/adminSettings/constants/userPemissionsArray';
import { IOption } from './components/Option/types';
import { selectTransition } from '../../../../../../../helpers/constants';
import { animated } from 'react-spring';

const Component: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const [option, setOption] = useState<IOption | null>();

  const rootEl = useRef<HTMLDivElement>(null);

  const transition = selectTransition(isOpen);
  useOnClickOutside(rootEl, () => setOpen(false));

  return (
    <div
      className={styles.select}
      ref={rootEl}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className={styles.select__label}>
        {option ? option.title : userPermissionsArray[0].title}
      </div>
      <div className={cx(styles.select__arrow, isOpen && styles.select__arrow_open)}>
        <HelperOpenSelectIcon />
      </div>
      {transition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className={styles.option__list}
            >
              {userPermissionsArray.map((option) => (
                <Option
                  option={option}
                  key={option.value}
                  setOption={setOption}
                />
              ))}
            </animated.div>
          ),
      )}
    </div>
  );
};
const SelectPermissionUser = React.memo(Component);

export { SelectPermissionUser };
