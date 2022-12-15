import React, { useEffect, useId, useState } from 'react';
import styles from './Info.module.scss';
import { infoInputs } from '../../../../../helpers/constants/registration/inputs';
import { DefaultInput } from '../../../../UI-Kit/Inputs/DefaultInput';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../../../../graphql/auth/registration/mutations';
import { useCookies } from 'react-cookie';
import { setupUser } from '../../../../../helpers/setupUser';
import { useAppDispatch } from '../../../../../hooks/redux';
import { userSlice } from '../../../../../redux/user/slices/UserSlice';
import { defaultInputs } from './default';
import { validateModelValue } from '../../../../../helpers/constants/validate/validateModelValue';
import { Loader } from '../../../../UI-Kit/Loader/Loader';
import { InfoExceptions } from '../../../../../helpers/constants/exceptions/auth/info';
import { errorTransition } from '../../../../../helpers/constants';
import { animated } from 'react-spring';
import { useInput } from '../../../../../hooks/inputEvents/useInput';

const Component: React.FC = () => {
  const [, setCookie] = useCookies();
  const dispatch = useAppDispatch();

  const { handleChangeInput, modelValue, handleBlur, setModelValue } = useInput(defaultInputs);

  const { userSet } = userSlice.actions;

  const [isError, setError] = useState<boolean>(false);

  const [handleRegister, { loading, error }] = useMutation(REGISTER_USER, {
    onCompleted: async (data) => {
      if (!data) return;
      const { registerUser } = data;
      setupUser(registerUser.tokens, setCookie);
      await dispatch(userSet(registerUser.user));
      setModelValue({ ...defaultInputs });
    },
    errorPolicy: 'all',
  });

  useEffect(() => {
    (async () => {
      if (error?.message === InfoExceptions.USER_OR_PHONE_ALREADY_USED) {
        await Promise.all(
          Object.keys(modelValue).map((item) =>
            setModelValue((prev) => ({
              ...prev,
              [item]: { ...prev[item], error: { status: true } },
            })),
          ),
        );
      }
      setError(true);
    })();
  }, [error]);

  const handleFocus = (callBack: (status: boolean) => void, status: boolean) => {
    setError(false);
    callBack(status);
  };

  const transition = errorTransition(isError);

  const handleSubmit = async () => {
    const countError = validateModelValue(modelValue);
    if (countError) return;
    await handleRegister({
      variables: {
        user: {
          email: modelValue.email.value,
          phone: modelValue.phone.value,
        },
      },
    });
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      {loading && <Loader isPortal={true} />}
      <div className={styles.formInfo__wrapper__title}>
        <h4 className={styles.formInfo__title}>Welcome</h4>
        <div className={styles.formInfo__description}>
          lets get started with a few simple steps!
        </div>
      </div>
      <div className={styles.formInfo__form}>
        {infoInputs.map((i) => (
          <DefaultInput
            type={i.type}
            key={useId()}
            name={i.name}
            label={i.label}
            modelValue={modelValue}
            onChange={handleChangeInput}
            onKeyPress={handleKey}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        ))}
        <div className={styles.formInfo__wrapper__button}>
          <button
            className={styles.formInfo__button}
            onClick={handleSubmit}
          >
            Get started
          </button>
        </div>
        {transition(
          (style, item) =>
            item && (
              <animated.div
                style={style}
                className={styles.error}
              >
                {error?.message}
              </animated.div>
            ),
        )}
      </div>
      <div className={styles.formInfo__login}>
        <span>You have a code?</span>
        <button>Join your team</button>
      </div>
    </>
  );
};
const Info = React.memo(Component);

export { Info };
