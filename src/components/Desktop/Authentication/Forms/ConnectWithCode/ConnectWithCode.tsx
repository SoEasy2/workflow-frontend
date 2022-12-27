import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Loader } from '../../../../UI-Kit/Loader/Loader';
import styles from './ConnectWithCode.module.scss';
import { Input } from '../Verification/components/Input';
import { Button } from '../../Button';
import { CONNECT_WITH_CODE } from '../../../../../graphql/auth/connectWithCode/mutations';

interface IConnectWithCode {
  setCompany: (data: string | null) => void;
}
const Component: React.FC<IConnectWithCode> = ({ setCompany }) => {
  const [code, setCode] = useState<Array<string | null>>([]);
  const [isError, setError] = useState<boolean>(false);

  const [handleClickConnect, { loading }] = useMutation(CONNECT_WITH_CODE, {
    onCompleted: (data) => {
      const { registerByCodeCompany: company } = data;
      setCompany(company);
    },
    onError: () => {
      setError(true);
    },
  });

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
    await handleClickConnect({
      variables: {
        code: code.join(''),
      },
    });
  };

  return (
    <div className={styles.connect}>
      {loading && <Loader isPortal={true} />}
      <div className={styles.connect__wrapper__title}>
        <h4 className={styles.connect__title}>Verification code</h4>
        <div className={styles.connect__description}>
          <div className={styles.connect__description__text}>
            Please, enter the code we sent to the e-mail
          </div>
          <div className={styles.connect__description__email}>company@company.com</div>
        </div>
      </div>
      <div className={styles.connect__form}>
        <div className={styles.connect__form__inputs}>
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
      </div>
      <div className={styles.connect__wrapper__button}>
        <Button
          onClick={handleClick}
          text={'Continue'}
          disabled={Boolean(!code.length) || !code.every((i) => i)}
        />
      </div>
    </div>
  );
};

const ConnectWithCode = React.memo(Component);

export { ConnectWithCode };
