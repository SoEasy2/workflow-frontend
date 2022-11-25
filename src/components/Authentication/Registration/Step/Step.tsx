import React, { useEffect, useState } from 'react';
import styles from './Step.module.scss';
import image from '../../../../assets/images/authenticate/step.png';
import { IStep } from '../../../../helpers/constants/registration/types/steps';
import { steps } from '../../../../helpers/constants';
import { StepEnum } from '../../../../helpers/constants/registration/enums/step';

interface IStepProps {
  stepNumber: StepEnum;
}
const Component: React.FC<IStepProps> = ({ stepNumber }) => {
  const [step, setStep] = useState<IStep>(steps[0]);
  useEffect(() => {
    const findStep = steps.find((item) => item.step === stepNumber);
    console.log(findStep);
    findStep && setStep(findStep);
  }, [stepNumber]);
  return (
    <div className={styles.step}>
      <div className={styles.step__top}>
        <h4 className={styles.step__title}>Connect your team with WorkFly</h4>
        <div className={styles.step__info}>
          <span className={styles.current}>{step.step}</span>
          <span className={styles.sl}>/</span>
          {steps.length} - {step.text}
        </div>
      </div>
      <div className={styles.step__login}>
        <span className={styles.step__login__text}>Already have an account?</span>
        <button className={styles.step__login__button}>Sign in</button>
      </div>
      <div className={styles.step__image}>
        <img src={image} alt='' className={styles.image} />
      </div>
    </div>
  );
};
const Step = React.memo(Component);

export { Step };
