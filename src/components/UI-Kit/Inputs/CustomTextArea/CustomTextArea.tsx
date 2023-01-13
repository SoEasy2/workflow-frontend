import React, { useState } from 'react';
import cx from 'classnames';
import styles from './CustomTextArea.module.scss';
import { IDefaultInput } from '../DefaultInput/interface';

const Component: React.FC<IDefaultInput> = ({
  disabled,
  classNameWrapper,
  name,
  classNameLabel,
  label,
  placeholder,
  classNameInput,
  modelValue,
  onChange,
}) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (value: string) => {
    setValue(value);
    console.log('modelvalue', modelValue);
    console.log('name', name);
    modelValue && onChange && onChange(name, { ...modelValue[name], value });
  };

  return (
    <div
      className={cx(
        styles.textarea__wrapper,
        disabled && styles.dateTimePicker__wrapper_disable,
        classNameWrapper,
      )}
    >
      <label
        htmlFor={name}
        className={cx(styles.label, classNameLabel)}
      >
        {label}
      </label>
      <textarea
        name={name}
        className={cx(styles.textarea, classNameInput)}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
const CustomTextArea = React.memo(Component);

export { CustomTextArea };
