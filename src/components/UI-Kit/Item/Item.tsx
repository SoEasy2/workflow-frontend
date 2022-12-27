import React, { useRef, useState } from 'react';
import styles from './Item.module.scss';
import { HelpIcon } from '../../../helpers/icons';
import '../../../sass/_abstract/_transition.scss';
import { UTooltip } from '../UTooltip';
import { tooltipTransition } from '../../../helpers/constants';
import { IOffset } from '../../../helpers/constants/types/offset';

interface IItemProps {
  name: string;
  component: React.ReactNode;
  props: object;
}
const Component: React.FC<IItemProps> = ({ name, component }) => {
  const [isMove, setMove] = useState<boolean>(false);
  const [offset, setOffset] = useState<IOffset>({
    top: 0,
    left: 0,
    right: 0,
  });
  const ref = useRef<HTMLDivElement>(null);
  const transition = tooltipTransition(isMove);
  const handleMouseEnter = () => {
    if (ref.current) {
      const offset = ref.current.getBoundingClientRect();
      setOffset({
        top: offset.top,
        left: offset.left,
        right: offset.right,
      });
    }
  };
  return (
    <div className={styles.item}>
      <div className='item__title'>
        <h6>Name: {name} </h6>
      </div>
      <div className={'item__component'}>{component}</div>
      <div className={'item__popup'}>
        <div
          className={styles.icon}
          onClick={() => setMove((prev) => !prev)}
        >
          <div
            className={styles.icon__wrapper}
            ref={ref}
            onMouseEnter={handleMouseEnter}
          >
            <HelpIcon />
          </div>
        </div>
        {transition(
          (style, item) =>
            item && (
              <UTooltip
                style={style}
                offset={offset}
              />
            ),
        )}
      </div>
    </div>
  );
};
const Item = React.memo(Component);
export { Item };
