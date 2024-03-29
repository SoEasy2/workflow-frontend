import React, { useEffect, useRef, useState } from 'react';
import styles from './CustomSelect.module.scss';
import { IOption } from './components/Option/interface';
import { HelperHideSelectIcon, HelperOpenSelectIcon } from '../../../../helpers/icons/helper';
import { OptionList } from './components/OptionList';
import cx from 'classnames';
import { IModelValue, IModelValueInput } from '../DefaultInput/interface';
import useOnClickOutside from '../../../../hooks/clickOutside/useClickOutside';

export interface ISelect {
  options: IOption[];
  placeholder?: string;
  onChange?: (key: string, value: IModelValueInput) => void;
  modelValue?: IModelValue;
  name: string;
  classNameButton?: string;
  label?: string;
}
const Component: React.FC<ISelect> = ({
  options,
  placeholder,
  modelValue,
  name,
  onChange,
  classNameButton,
  label,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<IOption | null>(null);
  const handleClick = (option: IOption) => {
    setValue(option);
    modelValue &&
      onChange &&
      onChange &&
      onChange(name, { ...modelValue[name], value: option.value.toString() });
    setOpen(false);
  };
  const rootEl = useRef<HTMLDivElement>(null);

  useOnClickOutside(rootEl, () => setOpen(false));

  useEffect(() => {
    const searchOption =
      modelValue && modelValue[name]
        ? options.find(
            (item) =>
              item.value === Number(modelValue[name].value) ||
              item.value === modelValue[name].value,
          )
        : null;
    setValue(searchOption ? searchOption : null);
  }, []);

  return (
    <div
      className={styles.select}
      ref={rootEl}
    >
      <div className={styles.label}>{label}</div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={cx(styles.select__button, open && styles.select__button_active, classNameButton)}
      >
        <span>{value ? value.label : placeholder}</span>
        {open ? <HelperOpenSelectIcon /> : <HelperHideSelectIcon />}
      </button>
      {open && (
        <OptionList
          options={options}
          handleClick={handleClick}
        />
      )}
    </div>
  );
};
const CustomSelect = React.memo(Component);

export { CustomSelect };
