import React, { useEffect } from 'react';
import styles from './Option.module.scss';
import { IOption } from './types';

interface IOptionProps {
  option: IOption;
  setOption: (data: IOption) => void;
}

const Component: React.FC<IOptionProps> = ({ option, setOption }) => {
  useEffect(() => {
    console.log(option);
  }, []);
  return (
    <div
      className={styles.option}
      onClick={() => setOption(option)}
    >
      <div className={styles.option__content}>
        <div className={styles.option__title}>{option.title}</div>
        <div className={styles.option__text}>{option.description}</div>
      </div>
    </div>
  );
};
const Option = React.memo(Component);

export { Option };
