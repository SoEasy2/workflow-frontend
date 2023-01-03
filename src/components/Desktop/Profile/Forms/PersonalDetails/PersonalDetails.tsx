import React, { useId } from 'react';
import { IDefaultInput, IModelValue } from '../../../../UI-Kit/Inputs/DefaultInput/interface';
import { useInput } from '../../../../../hooks/inputEvents/useInput';
import { defaultInputs } from './default';
import { CustomSelect } from '../../../../UI-Kit/Inputs/CustomSelect';
import { detailsOptions } from '../../../../../helpers/constants/registration/options';
import { DefaultInput } from '../../../../UI-Kit/Inputs/DefaultInput';
import { TypeValid } from '../../../../../helpers/constants/enum/typeHelper';
import styles from './PersonalDetails.module.scss';
interface IDetails {
  defaultModelValue?: IModelValue;
  inputs: IDefaultInput[];
  //  mutation: DocumentNode;
}

const Component: React.FC<IDetails> = ({ defaultModelValue, inputs }) => {
  const { modelValue, handleChangeInput, handleBlur } = useInput(
    defaultModelValue || defaultInputs,
  );
  return (
    <div className={styles.personalForm}>
      {inputs.map((input) => {
        if (input.isSelect) {
          return (
            <CustomSelect
              options={detailsOptions}
              key={useId()}
              placeholder={input.placeholder}
              name={input.name}
              modelValue={modelValue}
              onChange={handleChangeInput}
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
            onBlur={handleBlur}
            typeValid={TypeValid.ERROR}
            classNameInput={styles.input}
            placeholder={input.placeholder}
          />
        );
      })}
    </div>
  );
};
const PersonalDetails = React.memo(Component);

export { PersonalDetails };
