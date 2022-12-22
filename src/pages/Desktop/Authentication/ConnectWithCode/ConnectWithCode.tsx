import React, { useEffect, useState } from 'react';
import styles from './ConnectWithCode.module.scss';
import { Header } from '../../../../components/Desktop/Authentication/Header';
import { Layout } from '../../../../components/Desktop/Authentication/Layout';
import { Step } from '../../../../components/Desktop/Authentication/Step';
import { ModalLayout } from '../../../../components/Desktop/Authentication/ModalLayout';
import { Verification } from '../../../../components/Desktop/Authentication/Forms/Verification';
import { Details } from '../../../../components/Desktop/Authentication/Forms/Details';
import { StepConnect } from '../../../../helpers/constants/registration/enums/stepConnect';
import { useSearchParams } from 'react-router-dom';
import { ConnectWithCode } from '../../../../components/Desktop/Authentication/Forms/ConnectWithCode';

const Component: React.FC = () => {
  const [company, setCompany] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState<number>(StepConnect.CONNECT_WITH_CODE);

  useEffect(() => {
    if (searchParams.get('step')) {
      setCurrentStep(Number(searchParams.get('step')));
    }
  }, [searchParams.get('step')]);
  useEffect(() => {
    if (!company) setCurrentStep(StepConnect.CONNECT_WITH_CODE);
  }, [company]);

  return (
    <div className={styles.connect}>
      <Header />
      <Layout>
        <Step stepNumber={+currentStep} />
        <ModalLayout
          className={
            currentStep === StepConnect.CONNECT_WITH_CODE ||
            currentStep === StepConnect.CONNECT_VERIFICATION
              ? styles.layout
              : null
          }
        >
          {(() => {
            switch (currentStep) {
              case StepConnect.CONNECT_WITH_CODE:
                return <ConnectWithCode setCompany={setCompany} />;
              case StepConnect.CONNECT_DETAILS:
                return <Verification />;
              case StepConnect.CONNECT_VERIFICATION:
                return <Details />;
              default:
                return <ConnectWithCode setCompany={setCompany} />;
            }
          })()}
        </ModalLayout>
      </Layout>
    </div>
  );
};

const ConnectWithCodePage = React.memo(Component);

export { ConnectWithCodePage };
