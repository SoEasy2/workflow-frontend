import React, { useId } from 'react';
import styles from './ChangePassword.module.scss';
import { IDefaultInput, IModelValue } from '../../../../UI-Kit/Inputs/DefaultInput/interface';
import { useInput } from '../../../../../hooks/inputEvents/useInput';
import { InputByType } from '../../../../UI-Kit/InputByType/InputByType';
import { TypeValid } from '../../../../../helpers/constants/enum/typeHelper';
import { defaultValue } from './default';
import { Button } from '../../../../UI-Kit/Button';
import { ButtonTypes } from '../../../../../helpers/constants/enum';
import { animated } from 'react-spring';
import { errorTransition } from '../../../../../helpers/constants';
interface IChangePassword {
  defaultModelValue?: IModelValue;
  inputs: IDefaultInput[];
  //  mutation: DocumentNode;
  handleClickChangePassword: (modelValue: IModelValue) => void;
  error: string | null;
  setError: (data: string | null) => void;
}

const Component: React.FC<IChangePassword> = ({
  defaultModelValue,
  inputs,
  handleClickChangePassword,
  error,
  setError,
}) => {
  const { modelValue, handleChangeInput, handleBlur, setModelValue } = useInput(
    defaultModelValue || defaultValue,
  );

  const transition = errorTransition(!!error);

  const nullableModelValue = (modelValue: IModelValue) => {
    Object.keys(modelValue).map((key) => {
      setModelValue((prev) => ({ ...prev, [key]: { ...prev[key], value: '' } }));
    });
    console.log('modelValue', modelValue);
  };
  const handleClick = () => {
    handleClickChangePassword(modelValue);
    nullableModelValue(modelValue);
    setError(null);
  };

  return (
    <>
      <div className={styles.changePassword}>
        {inputs.map((input) => (
          <InputByType
            input={{
              ...input,
              modelValue,
              onChange: handleChangeInput,
              onBlur: handleBlur,
              typeValid: TypeValid.ERROR,
              classNameInput: styles.input,
              classNamePositionReset: styles.positionShow,
            }}
            key={useId()}
          />
        ))}
        {transition(
          (style, item) =>
            item && (
              <animated.div
                style={style}
                className={styles.error}
              >
                {error}
              </animated.div>
            ),
        )}
      </div>
      <div className={styles.changePassword__complete}>
        <div className={styles.changePassword__wrapper}>
          <Button
            onClick={handleClick}
            text={'Save changes'}
            type={ButtonTypes.ACTIVE}
            className={styles.button}
          />
        </div>
      </div>
    </>
  );
};

const ChangePassword = React.memo(Component);

export { ChangePassword };
