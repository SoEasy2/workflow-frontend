import React, { useEffect, useState } from 'react';
import { IDefaultInput } from './interface';
import cx from 'classnames';
import styles from './DefaultInput.module.scss';
import {
  HelperHideIcon,
  HelperNoValidIcon,
  HelperRemoveIcon,
  HelperShowIcon,
  HelperValidIcon,
} from '../../../../helpers/icons/helper';
import { InputTypes } from '../../../../helpers/constants/enum';
import PhoneInput from 'react-phone-number-input/input';
import { TypeValid } from '../../../../helpers/constants/enum/typeHelper';

const Component: React.FC<IDefaultInput> = ({
  name,
  modelValue,
  type = InputTypes.TEXT,
  classNameInput,
  classNameLabel,
  classNameWrapper,
  isShow,
  disabled = false,
  label,
  onChange,
  onKeyPress,
  onBlur,
  classNamePositionHelper,
  classNamePositionShowPass,
  classNamePositionReset,
  onFocus,
  typeValid = TypeValid.HELPER,
}) => {
  const [value, setValue] = useState<string>('');
  const [typeInput, setTypeInput] = useState<InputTypes>(type);

  const [isValid, setValid] = useState<null | boolean>(null);

  useEffect(() => {
    if (modelValue) {
      setValid(modelValue[name].error.status);
    }
  }, [modelValue]);

  const [isFocus, setFocus] = useState<boolean>(false);
  const handleChange = (value: string) => {
    setValue(value);
    modelValue && onChange && onChange(name, { ...modelValue[name], value });
  };

  const handleClickReset = () => {
    setValue('');
    modelValue && onChange && onChange(name, { ...modelValue[name], value: '' });
  };

  const handleBlur = () => {
    onBlur && onBlur(typeInput, value, name, setValid);
  };

  return (
    <div
      className={cx(
        styles.input__wrapper,
        disabled && styles.input__wrapper_disable,
        classNameWrapper,
      )}
    >
      <label
        htmlFor={name}
        className={cx(styles.label, classNameLabel)}
      >
        {label}
      </label>
      {typeInput === InputTypes.PHONE ? (
        <PhoneInput
          type={typeInput}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={cx(
            styles.input,
            classNameInput,
            !isFocus && isValid !== null && !isValid && styles.input__error,
          )}
          disabled={disabled}
          onKeyPress={onKeyPress}
          onBlur={handleBlur}
          onFocus={() => (onFocus ? onFocus(setFocus, true) : setFocus(true))}
        />
      ) : (
        <input
          type={typeInput}
          id={name}
          name={name}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
          className={cx(
            styles.input,
            classNameInput,
            !isFocus && isValid !== null && !isValid && styles.input__error,
          )}
          disabled={disabled}
          onKeyPress={onKeyPress}
          onBlur={handleBlur}
          onFocus={() => (onFocus ? onFocus(setFocus, true) : setFocus(true))}
        />
      )}
      <div
        className={cx(styles.helper, classNamePositionReset)}
        onClick={handleClickReset}
      >
        {!disabled &&
          value &&
          value.length > 0 &&
          isFocus &&
          (type === InputTypes.TEXT || type === InputTypes.PHONE) && (
            <div
              className={cx(styles.helper__remove)}
              onClick={() => console.log('click')}
            >
              <HelperRemoveIcon />
            </div>
          )}
        {!disabled && isShow && (
          <div
            className={cx(styles.helper__showIcon, classNamePositionShowPass)}
            onClick={() =>
              setTypeInput((prev) =>
                prev === InputTypes.TEXT ? InputTypes.PASSWORD : InputTypes.TEXT,
              )
            }
          >
            {typeInput === InputTypes.TEXT ? (
              <HelperShowIcon />
            ) : (
              <div className={styles.helper__hideIcon_top}>
                <HelperHideIcon />
              </div>
            )}
          </div>
        )}
        {isValid !== null && !isFocus && typeValid === TypeValid.HELPER && (
          <div className={cx(styles.helper__valid, classNamePositionHelper)}>
            {isValid ? <HelperValidIcon /> : <HelperNoValidIcon />}
          </div>
        )}
      </div>
    </div>
  );
};

const DefaultInput = React.memo(Component);

export { DefaultInput };
