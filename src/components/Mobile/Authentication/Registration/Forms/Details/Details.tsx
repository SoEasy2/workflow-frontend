import React, { useId, useState } from 'react';
import { Button } from '../../../../../UI-Kit/Button';
import { ButtonTypes } from '../../../../../../helpers/constants/enum';
import styles from './Details.module.scss';
import { BackMobileIcon } from '../../../../../../helpers/iconsMobile';
import { detailsInputs } from '../../../../../../helpers/constants/registration/inputs';
import { CustomSelect } from '../../../../../UI-Kit/Inputs/CustomSelect';
import { detailsOptions } from '../../../../../../helpers/constants/registration/options';
import { DefaultInput } from '../../../../../UI-Kit/Inputs/DefaultInput';
import { IModelValue, IModelValueInput } from '../../../../../UI-Kit/Inputs/DefaultInput/interface';
import { defaultInputs } from './default';

const Component: React.FC = () => {
  const [modelValue, setModelValue] = useState<IModelValue>(defaultInputs);

  const handleChangeInput = (name: string, modelValue: IModelValueInput) => {
    setModelValue((prev) => ({ ...prev, [name]: { ...prev[name], ...modelValue } }));
  };

  return (
    <div className={styles.details}>
      <div className={styles.details__wrapper}>
        <div className={styles.details__back}>
          <BackMobileIcon />
        </div>
        <div className={styles.details__title}>Registration</div>
        <div className={styles.details__form}>
          {detailsInputs.map((input, index) => {
            if (index === 2) {
              return (
                <CustomSelect
                  options={detailsOptions}
                  key={useId()}
                  placeholder={input.placeholder}
                  name={input.name}
                  modelValue={modelValue}
                  onChange={handleChangeInput}
                  classNameButton={styles.select}
                  label={'Amount employees'}
                />
              );
            }
            return (
              <DefaultInput
                type={input.type}
                key={useId()}
                name={input.name}
                label={input.label}
                disabled={input.disabled}
                isShow={input.isShow}
                modelValue={modelValue}
                onChange={handleChangeInput}
                classNameInput={styles.input}
                classNamePositionHelper={styles.positionHelper}
                classNamePositionReset={styles.positionReset}
              />
            );
          })}
        </div>
        <div className={styles.details__agreement}>
          <span>By continuing, you’re agreeing to our</span>
          <span>Customer Terms of Service, and Privacy Policy.</span>
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

const Details = React.memo(Component);

export { Details };
