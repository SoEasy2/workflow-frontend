import React, { useEffect, useState } from 'react';
import styles from './ConnectWithCode.module.scss';
import { Header } from '../../../../components/Desktop/Authentication/Header';
import { Layout } from '../../../../components/Desktop/Authentication/Layout';
import { Step } from '../../../../components/Desktop/Authentication/Step';
import { ModalLayout } from '../../../../components/Desktop/Authentication/ModalLayout';
import { StepConnect } from '../../../../helpers/constants/registration/enums/stepConnect';
import { useSearchParams } from 'react-router-dom';
import { ConnectWithCode } from '../../../../components/Desktop/Authentication/Forms/ConnectWithCode';
import { detailsConnectInputs } from '../../../../helpers/constants/registration/inputs';
import { useAppSelector } from '../../../../hooks/redux';
import { defaultInputs } from './defaults/details';
import { DETAILS_BY_CODE_COMPANY } from '../../../../graphql/auth/connectWithCode/mutations';
import { ConnectDetails } from '../../../../components/Desktop/Authentication/Forms/ConnectDetails';
import { Verification } from '../../../../components/Desktop/Authentication/Forms/Verification';

const Component: React.FC = () => {
  const [company, setCompany] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState<number>(StepConnect.CONNECT_WITH_CODE);
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (searchParams.get('step')) {
      setCurrentStep(Number(searchParams.get('step')));
    }
  }, [searchParams.get('step')]);
  useEffect(() => {
    if (!company) setCurrentStep(StepConnect.CONNECT_WITH_CODE);
    else if (company && !user) setCurrentStep(StepConnect.CONNECT_DETAILS);
    console.log('company', company);
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
                return (
                  <ConnectDetails
                    inputs={detailsConnectInputs}
                    mutation={DETAILS_BY_CODE_COMPANY}
                    defaultModelValue={defaultInputs}
                    company={company}
                  />
                );
              case StepConnect.CONNECT_VERIFICATION:
                return <Verification />;
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
