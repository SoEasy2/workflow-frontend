import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/Authentication/Header';
import { Layout } from '../../../components/Authentication/Layout';
import { Info } from '../../../components/Authentication/Registration/Forms/Info';
import { Step } from '../../../components/Authentication/Registration/Step';
import styles from './Registration.module.scss';
import { ModalLayout } from '../../../components/Authentication/ModalLayout';
import { useSearchParams } from 'react-router-dom';
import { StepEnum } from '../../../helpers/constants/registration/enums/step';
import { Verification } from '../../../components/Authentication/Registration/Forms/Verification';
import { Details } from '../../../components/Authentication/Registration/Forms/Details';

const Component: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState<number>(1);
  useEffect(() => {
    if (searchParams.get('step')) {
      setCurrentStep(Number(searchParams.get('step')));
    }
  }, [searchParams.get('step')]);
  return (
    <div className={styles.registration}>
      <Header />
      <Layout>
        <Step stepNumber={+currentStep} />
        <ModalLayout className={currentStep === StepEnum.VERIFICATION ? styles.layout : null}>
          {(() => {
            switch (currentStep) {
              case StepEnum.REGISTRATION:
                return <Info />;
              case StepEnum.VERIFICATION:
                return <Verification />;
              case StepEnum.DETAILS:
                return <Details />;
              default:
                return <Info />;
            }
          })()}
        </ModalLayout>
      </Layout>
    </div>
  );
};
const Registration = React.memo(Component);

export { Registration };
