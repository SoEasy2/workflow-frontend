import React, { useId, useState } from 'react';
import styles from './Details.module.scss';
import { detailsInputs } from '../../../../../../helpers/constants/registration/inputs';
import { CustomSelect } from '../../../../UI-Kit/Inputs/CustomSelect';
import { detailsOptions } from '../../../../../../helpers/constants/registration/options';
import { DefaultInput } from '../../../../UI-Kit/Inputs/DefaultInput';
import { defaultInputs } from './default';
import { IModelValue, IModelValueInput } from '../../../../UI-Kit/Inputs/DefaultInput/interface';

const Component: React.FC = () => {
    const [modelValue, setModelValue] = useState<IModelValue>(defaultInputs);

    const handleChangeInput = (name: string, modelValue: IModelValueInput) => {
        setModelValue((prev) => ({ ...prev, [name]: { ...prev[name], ...modelValue } }));
    };

  return (
    <>
      <div className={styles.formDetails__wrapper__title}>
        <h4 className={styles.formDetails__title}>Company details</h4>
      </div>
      <div className={styles.formDetails__form}>
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
            />
          );
        })}
        <div className={styles.formDetails__wrapper__button}>
          <button className={styles.formDetails__button} onClick={() => console.log('CLICK', modelValue)}>Registration</button>
        </div>
      </div>
      <div className={styles.formDetails__agreement}>
          <span>By continuing, you’re agreeing to our</span>
          <span>Customer Terms of Service, and Privacy Policy.</span>
      </div>
    </>
  );
};
const Details = React.memo(Component);

export { Details };
