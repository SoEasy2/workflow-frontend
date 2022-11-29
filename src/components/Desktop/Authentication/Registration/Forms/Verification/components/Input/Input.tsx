import React from 'react';
import styles from './Input.module.scss';

interface IInput {
  id: string;
  index: number;
  value: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  keyDown: (e: React.KeyboardEvent<HTMLInputElement>, index: number) => void;
}
const Component: React.FC<IInput> = ({ id, value, onChange, index, onPaste, keyDown }) => {
  return (
    <>
      <input
        type='text'
        className={styles.input}
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
