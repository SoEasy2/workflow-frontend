import React, { useEffect, useState } from 'react';
import styles from './Verification.module.scss';
import { Input } from './components/Input';
import { Button } from '../../../Button';
import { useMutation } from '@apollo/client';
import { RESEND_VERIFICATION_CODE, VERIFICATION_CODE } from '../../../../../../graphql/auth/registration/mutations';
import { userSlice } from '../../../../../../redux/user/slices/UserSlice';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/redux';
import getSecondsTimerVerification from '../../../../../../helpers/getSecondsTimerVerification';

const Component: React.FC = () => {
  const [code, setCode] = useState<Array<string | null>>([]);
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = React.useState(false);

  const [isError, setError] = useState<boolean>(false);

  const { userUpdate } = userSlice.actions;

  const [handleResend] = useMutation(RESEND_VERIFICATION_CODE, {
    onCompleted: async (data) => {
      const { resendVerificationCode } = data;
      dispatch(userUpdate({ sendCodeDate: resendVerificationCode.sendCodeDate }));
    },
    onError: () => {
      setError(true)
    }
  });

  const handleClickResend = async () => {
    await handleResend();
  }

  const [handleVerification] = useMutation(VERIFICATION_CODE, {
    onCompleted: async (data) => {
      const { verificationUser } = data;
      dispatch(userUpdate({ stepRegistration: +verificationUser.stepRegistration }));
    },
    onError: () => {
      setError(true);
    },
  });

  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      setTimer()
    }
  }, [user])

  const dispatch = useAppDispatch();

  const setTimer = React.useCallback(() => {
    if (user) {
      const secondsVerification = getSecondsTimerVerification(new Date(user.sendCodeDate));
      secondsVerification > 0 && setSeconds(secondsVerification);
      console.log('seconds', secondsVerification);
      secondsVerification > 0 && setTimerActive(true);
    }
  }, [user]);



  const onPaste = React.useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const paste = e.clipboardData?.getData('text').trim();
      if (paste) {
        const newCode = paste.split('').slice(0, 4);
        setCode(newCode);
        const inputs = document.querySelectorAll('input');
        if (newCode.length === 4) {
          inputs[3].focus();
        } else {
          inputs[newCode.length].focus();
        }
      }
    },
    [code],
  );

  useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    }
  }, [seconds, timerActive]);

  const keyDown = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && index !== 0) {
      const inputs = document.querySelectorAll('input');
      if (e.currentTarget.value === '') {
        inputs[e.currentTarget.tabIndex - 1].focus();
      }
    } else if (e.key === ' ') {
      e.preventDefault();
      return;
    }
  }, []);

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      isError && setError(false);
      const value = e.target.value.split('')[0];
      const newCode = [...code];
      newCode[index] = value;
      const inputs = document.querySelectorAll('input');
      setCode(newCode);
      if (index + 1 === code.length || !value) {
        return;
      }
      inputs[index + 1].focus();
    },
    [code],
  );

  const handleClick = async () => {
    if (!code.length) {
      return;
    }
    await handleVerification({
      variables: {
        emailCode: code.join(''),
      },
    });
  };

  return (
    <>
      <div className={styles.formVerification__wrapper__title}>
        <h4 className={styles.formVerification__title}>Verification code</h4>
        <div className={styles.formVerification__description}>
          <div className={styles.formVerification__description__text}>
            Please, enter the code we sent to the e-mail
          </div>
          <div className={styles.formVerification__description__email}>company@company.com</div>
        </div>
      </div>
      <div className={styles.formVerification__form}>
        <div className={styles.formVerification__form__inputs}>
          <Input
            key={1}
            id={'code'}
            index={0}
            value={code[0]}
            onChange={onChange}
            onPaste={onPaste}
            keyDown={keyDown}
            isError={isError}
          />
          <Input
            key={2}
            id={'code'}
            index={1}
            value={code[1]}
            onChange={onChange}
            onPaste={onPaste}
            keyDown={keyDown}
            isError={isError}
          />
          <div></div>
          <Input
            key={3}
            id={'code'}
            index={2}
            value={code[2]}
            onChange={onChange}
            onPaste={onPaste}
            keyDown={keyDown}
            isError={isError}
          />
          <Input
            key={4}
            id={'code'}
            index={3}
            value={code[3]}
            onChange={onChange}
            onPaste={onPaste}
            keyDown={keyDown}
            isError={isError}
          />
        </div>
        <div className={styles.formVerification__wrapper__button}>
          <Button
            onClick={handleClick}
            text={'Continue'}
            disabled={Boolean(!code.length) || !code.every((i) => i)}
          />
        </div>
      </div>
      <div className={styles.formVerification__receive}>
        {timerActive && seconds > 0 && (
          <div className={styles.formVerification__receive__timer}>
            <span>00</span>
            <span>:</span>
            <span>{('0' + seconds.toString()).slice(-2)}</span>
          </div>
        )}
        <div className={styles.formVerification__receive__text}>
          <span>Didn`t receive an email?</span>
          <button onClick={() => handleClickResend()}>Resend</button>
        </div>
      </div>
    </>
  );
};
const Verification = React.memo(Component);

export { Verification };
