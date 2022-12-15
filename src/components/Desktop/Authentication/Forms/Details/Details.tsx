import React, { useId } from 'react';
import styles from './Details.module.scss';
import { detailsInputs } from '../../../../../helpers/constants/registration/inputs';
import { CustomSelect } from '../../../../UI-Kit/Inputs/CustomSelect';
import { detailsOptions } from '../../../../../helpers/constants/registration/options';
import { DefaultInput } from '../../../../UI-Kit/Inputs/DefaultInput';
import { defaultInputs } from './default';
import { IModelValue } from '../../../../UI-Kit/Inputs/DefaultInput/interface';
import { validateModelValue } from '../../../../../helpers/constants/validate/validateModelValue';
import { useInput } from '../../../../../hooks/inputEvents/useInput';
import { TypeValid } from '../../../../../helpers/constants/enum/typeHelper';
import { useMutation } from '@apollo/client';
import {
  DETAILS_USER,
} from '../../../../../graphql/auth/registration/mutations';
import { userSlice } from '../../../../../redux/user/slices/UserSlice';
import { useAppDispatch } from '../../../../../hooks/redux';
import { Loader } from '../../../../UI-Kit/Loader/Loader';
import { DetailsExceptions } from '../../../../../helpers/constants/exceptions/auth/Details';

const setObjectSend = (object: IModelValue) => {
  const result = {} as any;
  Object.keys(object).map((key) => {
    if (object[key].prefix && object[key].objectName) {
      Object.assign(result, {
        [String(object[key].prefix)]: {
          ...result[String(object[key].prefix)],
          [String(object[key].objectName)]: object[key].value,
        },
      });
    }
  });
  return result;
};

const Component: React.FC = () => {
  const { modelValue, handleChangeInput, handleBlur, setModelValue } = useInput(defaultInputs);

  const dispatch = useAppDispatch();

  const handleClick = async () => {
    const countError = validateModelValue(modelValue);
    if (countError) return;
    const objectSend = setObjectSend(modelValue);
    await handleRegister({
      variables: {
        detailsInput: objectSend,
      },
    });
  };

  const { userUpdate } = userSlice.actions;

  const [handleRegister, { loading }] = useMutation(DETAILS_USER, {
    onCompleted: async (data) => {
      const { details } = data;
      dispatch(userUpdate(details));
    },
    onError: (error) => {
      const { message } = error;
      if (message.trim() === DetailsExceptions.COMPANY_ALREADY_EXISTS) {
        setModelValue((prev) => ({
          ...prev,
          ['companyName']: { ...prev['companyName'], error: { status: false } },
        }));
      }
    },
  });

  const handleFocus = (callBack: (status: boolean) => void, status: boolean) => {
    callBack(status);
  };

  return (
    <>
      {loading && <Loader isPortal={true} />}
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
              onFocus={handleFocus}
            />
          );
        })}
        <div className={styles.formDetails__wrapper__button}>
          <button
            className={styles.formDetails__button}
            onClick={handleClick}
          >
            Registration
          </button>
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
