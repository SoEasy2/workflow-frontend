import React, { useId, useState } from 'react';
import styles from './Info.module.scss';
import { Button } from '../../../../../UI-Kit/Button';
import { ButtonTypes, InputTypes } from '../../../../../../helpers/constants/enum';
import { CloseMobileIcon } from '../../../../../../helpers/iconsMobile';
import { infoInputs } from '../../../../../../helpers/constants/registration/inputs';
import { DefaultInput } from '../../../../../UI-Kit/Inputs/DefaultInput';
import { defaultInputs } from './default';
import { IModelValue, IModelValueInput } from '../../../../../UI-Kit/Inputs/DefaultInput/interface';
import { checkValidValueInput } from '../../../../../../helpers/constants/validate/checkValidValueInput';

const Component: React.FC = () => {
  const [modelValue, setModelValue] = useState<IModelValue>(defaultInputs);

  const handleChangeInput = (name: string, modelValue: IModelValueInput) => {
    setModelValue((prev) => ({ ...prev, [name]: { ...prev[name], ...modelValue } }));
  };

  const handleBlur = (
    typeInput: InputTypes,
    value: string,
    name: string,
    callback?: (data: boolean) => void,
  ) => {
    const isValidInput = checkValidValueInput(typeInput, value);
    if (!isValidInput) {
      setModelValue((prev) => ({ ...prev, [name]: { ...prev[name], error: { status: false } } }));
      callback && callback(false);
      return;
    }
    setModelValue((prev) => ({ ...prev, [name]: { ...prev[name], error: { status: true } } }));
    callback && callback(true);
  };

  return (
    <div className={styles.info}>
      <div className={styles.info__wrapper}>
        <div className={styles.info__button_close}>
          <CloseMobileIcon />
        </div>
        <div className={styles.info__text}>
          <div className={styles.info__title}>Welcome to Workfly</div>
          <div className={styles.info__description}>lets get started with a few simple steps!</div>
        </div>
        <div className={styles.info__form}>
          {infoInputs.map((i) => (
            <DefaultInput
              type={i.type}
              key={useId()}
              name={i.name}
              label={i.label}
              modelValue={modelValue}
              onChange={handleChangeInput}
              onBlur={handleBlur}
              classNameInput={styles.input}
              classNamePositionHelper={styles.positionHelper}
            />
          ))}
        </div>
      </div>
      <Button
        type={ButtonTypes.ACTIVE}
        text={'Continue'}
        className={styles.button}
      />
    </div>
  );
};

const Info = React.memo(Component);

export { Info };
