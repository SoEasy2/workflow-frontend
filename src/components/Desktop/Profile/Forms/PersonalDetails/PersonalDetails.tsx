import React, { useEffect, useId } from 'react';
import { IDefaultInput, IModelValue } from '../../../../UI-Kit/Inputs/DefaultInput/interface';
import { useInput } from '../../../../../hooks/inputEvents/useInput';
import { defaultInputs } from './default';
import { TypeValid } from '../../../../../helpers/constants/enum/typeHelper';
import styles from './PersonalDetails.module.scss';
import { InputByType } from '../../../../UI-Kit/InputByType/InputByType';
import { Button } from '../../../../UI-Kit/Button';
import { ButtonTypes } from '../../../../../helpers/constants/enum';
import { IUser } from '../../../../../redux/user/interfaces/user.interface';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { validateModelValue } from '../../../../../helpers/constants/validate/validateModelValue';
import { DefaultObject } from '../../../../../types/defaultObject';
import { userSlice } from '../../../../../redux/user/slices/UserSlice';
import { useMutation } from '@apollo/client';
import { Loader } from '../../../../UI-Kit/Loader/Loader';
import { UPDATE_USER } from '../../../../../graphql/user/mutations';
interface IDetails {
  defaultModelValue?: IModelValue;
  inputs: IDefaultInput[];
  //  mutation: DocumentNode;
}

const setupDefault = (defaultInputs: IModelValue, user: IUser): IModelValue => {
  if (user) {
    const result = defaultInputs;
    Object.keys(user).map((key) => {
      if (result[key]) {
        const valueUser = user[key as keyof IUser];
        result[key].value = valueUser ? valueUser.toString() : '';
      }
    });
    return result;
  }
  return defaultInputs;
};

const Component: React.FC<IDetails> = ({ inputs }) => {
  const { user } = useAppSelector((user) => user.user);
  const dispatch = useAppDispatch();
  const { modelValue, handleChangeInput, handleBlur, setModelValue } = useInput(
    setupDefault(defaultInputs, user!),
  );
  useEffect(() => {
    if (user) {
      setModelValue(setupDefault(defaultInputs, user));
    }
  }, [user]);

  const { userUpdate } = userSlice.actions;

  const [handleUpdate, { loading }] = useMutation(UPDATE_USER, {
    onCompleted: (data) => {
      const { updateUser } = data;
      dispatch(userUpdate(updateUser));
    },
  });

  const handleClick = async () => {
    const countError = validateModelValue(modelValue);
    if (countError) return;
    const body = {} as DefaultObject<string | null>;
    Object.keys(modelValue).map((key) => {
      body[key] = modelValue[key].value ? modelValue[key].value : null;
    });
    await handleUpdate({
      variables: {
        updateUserInput: body,
      },
    });
  };
  return (
    <>
      {loading && <Loader isPortal={true} />}
      <div className={styles.personalForm}>
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
      <div className={styles.personalForm__complete}>
        <div className={styles.personalForm__wrapper}>
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
const PersonalDetails = React.memo(Component);

export { PersonalDetails };
