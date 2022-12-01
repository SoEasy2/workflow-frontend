import React from 'react';
import styles from './Input.module.scss';
import cx from 'classnames';

interface IInput {
  id: string;
  index: number;
  value: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  keyDown: (e: React.KeyboardEvent<HTMLInputElement>, index: number) => void;
  className?: string
}
const Component: React.FC<IInput> = ({ id, value, onChange, index, onPaste, keyDown, className }) => {
  return (
    <>
      <input
        type='text'
        className={cx(styles.input, className)}
        id={id}
        value={value ? value : ''}
        onChange={(e) => onChange(e, index)}
        onPaste={onPaste}
        tabIndex={index}
        onKeyDown={(e) => keyDown(e, index)}
      />
    </>
  );
};
const Input = React.memo(Component);

export { Input };
