import React, { useId } from 'react';
import { IDefaultInput, IModelValue } from '../../../../UI-Kit/Inputs/DefaultInput/interface';
import styles from './Settings.module.scss';
import { InputByType } from '../../../../UI-Kit/InputByType/InputByType';
import { TypeValid } from '../../../../../helpers/constants/enum/typeHelper';
import { useInput } from '../../../../../hooks/inputEvents/useInput';
import { defaultValue } from './default';
import { languageOptions } from '../../../../../helpers/constants/enum/languages';
import { Button } from '../../../../UI-Kit/Button';
import { ButtonTypes } from '../../../../../helpers/constants/enum';

interface ISettings {
  defaultModelValue?: IModelValue;
  inputs: IDefaultInput[];
}
const Component: React.FC<ISettings> = ({ inputs, defaultModelValue }) => {
  const { modelValue, handleChangeInput, handleBlur } = useInput(defaultModelValue || defaultValue);
  return (
    <>
      <div className={styles.settings}>
        {inputs.map((input) => (
          <InputByType
            input={{
              ...input,
              modelValue,
              onChange: handleChangeInput,
              onBlur: handleBlur,
              typeValid: TypeValid.ERROR,
              classNameInput: styles.input,
              classNamePositionShowPass: styles.positionShow,
              options: languageOptions,
            }}
            key={useId()}
          />
        ))}
      </div>
      <div className={styles.settings__complete}>
        <div className={styles.settings__wrapper}>
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
const Settings = React.memo(Component);

export { Settings };
