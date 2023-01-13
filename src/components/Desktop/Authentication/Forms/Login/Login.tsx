import React, { useEffect, useId, useState } from 'react';
import { Loader } from '../../../../UI-Kit/Loader/Loader';
import styles from '../Info/Info.module.scss';
import { loginInputs } from '../../../../../helpers/constants/registration/inputs';
import { DefaultInput } from '../../../../UI-Kit/Inputs/DefaultInput';
import { animated } from 'react-spring';
import { useInput } from '../../../../../hooks/inputEvents/useInput';
import { defaultInputs } from './default';
import { useMutation } from '@apollo/client';
import { setupUser } from '../../../../../helpers/setupUser';
import { errorTransition } from '../../../../../helpers/constants';
import { useAppDispatch } from '../../../../../hooks/redux';
import { userSlice } from '../../../../../redux/user/slices/UserSlice';
import { useCookies } from 'react-cookie';
import { validateModelValue } from '../../../../../helpers/constants/validate/validateModelValue';
import { LOGIN_USER } from '../../../../../graphql/auth/login/mutations';
import { StepConnect } from '../../../../../helpers/constants/registration/enums/stepConnect';
import { useNavigate } from 'react-router';

const Component: React.FC = () => {
  const { handleChangeInput, modelValue, handleBlur, setModelValue } = useInput(defaultInputs);

  const [, setCookie] = useCookies();

  const [isError, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { userSet } = userSlice.actions;

  const handleClickJoin = () => {
    navigate({
      pathname: '/connect-with-code',
      search: `?step=${StepConnect.CONNECT_WITH_CODE}`,
    });
  };

  const [handleLogin, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      if (!data) return;
      const { login } = data;
      setupUser(login.tokens, setCookie);
      dispatch(userSet(login.user));
      setModelValue({ ...defaultInputs });
    },
    errorPolicy: 'all',
  });

  const handleFocus = (callBack: (status: boolean) => void, status: boolean) => {
    setError(false);
    callBack(status);
  };

  useEffect(() => {
    setError(!!error);
  }, [error]);

  const transition = errorTransition(isError);

  const handleSubmit = async () => {
    const countError = validateModelValue(modelValue);
    if (countError) return;
    await handleLogin({
      variables: {
        loginUserInput: {
          login: modelValue.login.value,
          password: modelValue.password.value,
        },
      },
    });
  };

  return (
    <>
      {loading && <Loader isPortal={true} />}
      <div className={styles.formInfo__wrapper__title}>
        <h4 className={styles.formInfo__title}>Welcome back!</h4>
        <div className={styles.formInfo__description}>
          Please, enter your e-mail or phone number to login
        </div>
      </div>
      <div className={styles.formInfo__form}>
        {loginInputs.map((input) => (
          <DefaultInput
            type={input.type}
            key={useId()}
            name={input.name}
            label={input.label}
            modelValue={modelValue}
            onChange={handleChangeInput}
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
                Invalid login / password
              </animated.div>
            ),
        )}
      </div>
      <div className={styles.formInfo__login}>
        <span>You have a code?</span>
        <button onClick={handleClickJoin}>Join your team</button>
      </div>
    </>
  );
};

const Login = React.memo(Component);

export { Login };
