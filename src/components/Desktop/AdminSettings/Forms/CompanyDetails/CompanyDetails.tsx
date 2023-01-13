import React, { useId } from 'react';
import styles from './CompanyDetails.module.scss';
import { InputByType } from '../../../../UI-Kit/InputByType/InputByType';
import { TypeValid } from '../../../../../helpers/constants/enum/typeHelper';
import { Button } from '../../../../UI-Kit/Button';
import { ButtonTypes } from '../../../../../helpers/constants/enum';
import { IDefaultInput, IModelValue } from '../../../../UI-Kit/Inputs/DefaultInput/interface';
import { useAppSelector } from '../../../../../hooks/redux';
import { useInput } from '../../../../../hooks/inputEvents/useInput';
import { ICompany } from '../../../../../redux/user/company.interface';
import { defaultInputs } from './default';

interface ICompanyDetails {
  defaultModelValue?: IModelValue;
  inputs: IDefaultInput[];
  //  mutation: DocumentNode;
}

const setupDefault = (defaultInputs: IModelValue, company?: ICompany): IModelValue => {
  if (company) {
    const result = defaultInputs;
    Object.keys(company).map((key) => {
      if (result[key]) {
        const valueCompany = company[key as keyof ICompany];
        result[key].value = valueCompany ? valueCompany.toString() : '';
      }
    });
    return result;
  }
  return defaultInputs;
};

const Component: React.FC<ICompanyDetails> = ({ inputs, defaultModelValue }) => {
  const { user } = useAppSelector((user) => user.user);
  const { modelValue, handleChangeInput, handleBlur } = useInput(
    defaultModelValue
      ? setupDefault(defaultModelValue, user!.currentCompany)
      : setupDefault(defaultInputs, user!.currentCompany),
  );
  return (
    <>
      <div className={styles.companyDetails}>
        {inputs.map((input) => (
          <InputByType
            input={{
              ...input,
              modelValue,
              onChange: handleChangeInput,
              onBlur: handleBlur,
              typeValid: TypeValid.ERROR,
              classNameInput: styles.input,
            }}
            key={useId()}
          />
        ))}
      </div>
      <div className={styles.companyDetails__complete}>
        <div className={styles.companyDetails__wrapper}>
          <Button
            onClick={() => console.log('click')}
            text={'Save changes'}
            type={ButtonTypes.ACTIVE}
            className={styles.button}
          />
        </div>
      </div>
    </>
  );
};
const CompanyDetails = React.memo(Component);

export { CompanyDetails };
