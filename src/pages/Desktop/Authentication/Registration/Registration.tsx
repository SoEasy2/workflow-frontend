import React, { useEffect, useState } from 'react';
import { Header } from '../../../../components/Desktop/Authentication/Header';
import { Layout } from '../../../../components/Desktop/Authentication/Layout';
import { Info } from '../../../../components/Desktop/Authentication/Forms/Info';
import { Step } from '../../../../components/Desktop/Authentication/Step';
import styles from './Registration.module.scss';
import { ModalLayout } from '../../../../components/Desktop/Authentication/ModalLayout';
import { useSearchParams } from 'react-router-dom';
import { StepEnum } from '../../../../helpers/constants/registration/enums/step';
import { Verification } from '../../../../components/Desktop/Authentication/Forms/Verification';
import { Details } from '../../../../components/Desktop/Authentication/Forms/Details';
import { detailsInputs } from '../../../../helpers/constants/registration/inputs';
import { DETAILS_USER } from '../../../../graphql/auth/registration/mutations';

const Component: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState<number>(StepEnum.REGISTRATION);

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
                return <Details inputs={detailsInputs} mutation={DETAILS_USER} />;
              default:
                return <Info />;
            }
          })()}
        </ModalLayout>
      </Layout>
    </div>
  );
};
const RegistrationPage = React.memo(Component);

export { RegistrationPage };
