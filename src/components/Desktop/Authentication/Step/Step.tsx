import React, { useEffect, useState } from 'react';
import styles from './Step.module.scss';
import { IStep } from '../../../../helpers/constants/registration/types/steps';
import { steps } from '../../../../helpers/constants';
import { StepEnum } from '../../../../helpers/constants/registration/enums/step';
import imageRegistration from '../../../../assets/images/authenticate/stepRegistration.png';
import imageLogin from '../../../../assets/images/authenticate/stepLogin.png';
import { useAppSelector } from '../../../../hooks/redux';
import { useNavigate } from 'react-router';

interface IStepProps {
  stepNumber: StepEnum;
}
const Component: React.FC<IStepProps> = ({ stepNumber }) => {
  const [step, setStep] = useState<IStep>(steps[0]);

  const navigate = useNavigate();

  const { user } = useAppSelector(state => state.user)


  const handleClick = () => {
      switch (step.step) {
          case StepEnum.LOGIN: {
              if (user) {
                  navigate({
                      pathname: '/registration',
                      search: `?step=${user.stepRegistration}`,
                  });
              } else {
                  navigate({
                      pathname: '/registration',
                      search: `?step=${StepEnum.REGISTRATION}`,
                  });
              }
              break;
          }
          default: {
              navigate({
                  pathname: '/login',
              });
              break;
          }
      }
  }

  useEffect(() => {
    const findStep = steps.find((item) => item.step === stepNumber);
    findStep && setStep(findStep);
  }, [stepNumber]);
  return (
    <div className={styles.step}>
      <div className={styles.step__top}>
        <h4 className={styles.step__title}>Connect your team with WorkFly</h4>
        {step.step !== StepEnum.LOGIN && (
          <div className={styles.step__info}>
            <span className={styles.current}>{step.step}</span>
            <span className={styles.sl}>/</span>
            {steps.length} - {step.text}
          </div>
        )}
      </div>
      {step.step === StepEnum.LOGIN ? (
          <div className={styles.step__login}>
              <span className={styles.step__login__text}>Have no account?</span>
              <button className={styles.step__login__button} onClick={handleClick}>Registration</button>
          </div>
      ) : (
          <div className={styles.step__login}>
              <span className={styles.step__login__text}>Already have an account?</span>
              <button className={styles.step__login__button} onClick={handleClick}>Sign in</button>
          </div>
      )}

      <div className={styles.step__image}>
        <img
          src={step.step === StepEnum.LOGIN ? imageLogin : imageRegistration}
          alt='step'
          className={styles.image}
        />
      </div>
    </div>
  );
};
const Step = React.memo(Component);

export { Step };
