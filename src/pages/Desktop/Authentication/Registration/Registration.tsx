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
import {
  DETAILS_USER,
  VERIFICATION_CODE,
} from '../../../../graphql/auth/registration/mutations';
import { steps } from '../../../../helpers/constants';
import { useMutation } from '@apollo/client';
import { userSlice } from '../../../../redux/user/slices/UserSlice';
import { useAppDispatch } from '../../../../hooks/redux';

const Component: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState<number>(StepEnum.REGISTRATION);

  const { userUpdate } = userSlice.actions;

  const dispatch = useAppDispatch();

  const [isErrorVerification, setErrorVerification] = useState<boolean>(false);

  useEffect(() => {
    if (searchParams.get('step')) {
      setCurrentStep(Number(searchParams.get('step')));
    }
  }, [searchParams.get('step')]);

  const [handleVerification] = useMutation(VERIFICATION_CODE, {
    onCompleted: async (data) => {
      const { verificationUser } = data;
      dispatch(userUpdate({ stepRegistration: +verificationUser.stepRegistration }));
    },
    onError: () => {
      setErrorVerification(true);
    },
  });

  const handleClickVerification = async (code: string) => {
    if (!code) {
      return;
    }
    await handleVerification({
      variables: {
        emailCode: code,
      },
    });
  };

  return (
    <div className={styles.registration}>
      <Header />
      <Layout>
        <Step
          stepNumber={+currentStep}
          steps={steps}
        />
        <ModalLayout className={currentStep === StepEnum.VERIFICATION ? styles.layout : null}>
          {(() => {
            switch (currentStep) {
              case StepEnum.REGISTRATION:
                return <Info />;
              case StepEnum.VERIFICATION:
                return (
                  <Verification
                    handleClickVerification={handleClickVerification}
                    isErrorVerification={isErrorVerification}
                    setErrorVerification={setErrorVerification}
                  />
                );
              case StepEnum.DETAILS:
                return (
                  <Details
                    inputs={detailsInputs}
                    mutation={DETAILS_USER}
                  />
                );
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
