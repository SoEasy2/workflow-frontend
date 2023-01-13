import React, { useState } from 'react';
import styles from './DateTimePicker.module.scss';
import cx from 'classnames';
import { IDefaultInput } from '../DefaultInput/interface';
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

const Component: React.FC<IDefaultInput> = ({
  name,
  classNameWrapper,
  disabled,
  modelValue,
  onChange,
  label,
  classNameLabel,
  placeholder,
}) => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  const handleChange = (dateObject: Dayjs | null, dateString: string) => {
    setValue(dateObject);
    modelValue && onChange && onChange(name, { ...modelValue[name], value: dateString });
  };
  return (
    <div
      className={cx(
        styles.dateTimePicker__wrapper,
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
      <DatePicker
        onChange={handleChange}
        className={styles.input}
        placeholder={placeholder}
        getPopupContainer={(node) => node}
        showTime={false}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};
const DateTimePicker = React.memo(Component);

export { DateTimePicker };
