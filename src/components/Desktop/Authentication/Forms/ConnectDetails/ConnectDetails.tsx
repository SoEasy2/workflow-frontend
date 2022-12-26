import React, { useId } from 'react';
import styles from './ConnectDetails.module.scss';
import { DefaultInput } from '../../../../UI-Kit/Inputs/DefaultInput';
import { IDefaultInput, IModelValue } from '../../../../UI-Kit/Inputs/DefaultInput/interface';
import { validateModelValue } from '../../../../../helpers/constants/validate/validateModelValue';
import { useInput } from '../../../../../hooks/inputEvents/useInput';
import { TypeValid } from '../../../../../helpers/constants/enum/typeHelper';
import { DocumentNode, useMutation } from '@apollo/client';
import { userSlice } from '../../../../../redux/user/slices/UserSlice';
import { useAppDispatch } from '../../../../../hooks/redux';
import { Loader } from '../../../../UI-Kit/Loader/Loader';
import { setupUser } from '../../../../../helpers/setupUser';
import { useCookies } from 'react-cookie';

interface IDetails {
    defaultModelValue: IModelValue;
    inputs: IDefaultInput[];
    mutation: DocumentNode;
    company: string | null;
}

const Component: React.FC<IDetails> = ({ defaultModelValue, mutation, inputs, company }) => {
    const { modelValue, handleChangeInput, handleBlur } = useInput(defaultModelValue);

    const dispatch = useAppDispatch();

    const [, setCookie] = useCookies();

    const handleClick = async () => {
        const countError = validateModelValue(modelValue);
        if (countError) return;
        const sendObject = {} as any;
        Object.keys(modelValue).map(key => {
            sendObject[key] = modelValue[key].value;
        })
        await handleRegister({
            variables: {
                detailsByCodeCompanyInput: { ...sendObject, currentCompany: company },
            },
        });
    };

    const { userSet } = userSlice.actions;

    const [handleRegister, { loading }] = useMutation(mutation, {
        onCompleted: (data) => {
            const { detailsByCodeCompany } = data;
            dispatch(userSet(detailsByCodeCompany.user));
            setupUser(detailsByCodeCompany.tokens, setCookie);
        },
        onError: (error) => {
            const { message } = error;
            console.log(message);
        },
    });

    const handleFocus = (callBack: (status: boolean) => void, status: boolean) => {
        callBack(status);
    };

    return (
        <>
            {loading && <Loader isPortal={true} />}
            <div className={styles.formDetails_connect__wrapper__title}>
                <h4 className={styles.formDetails_connect__title}>Company details</h4>
            </div>
            <div className={styles.formDetails_connect__form}>
                { inputs.map((input) => 
                        <DefaultInput
                            type={input.type}
                            key={useId()}
                            name={input.name}
                            label={input.label}
                            disabled={input.disabled}
                            isShow={input.isShow}
                            modelValue={modelValue}
                            onChange={handleChangeInput}
                            onBlur={handleBlur}
                            typeValid={TypeValid.ERROR}
                            onFocus={handleFocus}
                        />
                    )
                }
                <div className={styles.formDetails_connect__wrapper__button}>
                    <button
                        className={styles.formDetails_connect__button}
                        onClick={handleClick}
                    >
                        Registration
                    </button>
                </div>
            </div>
            <div className={styles.formDetails_connect__agreement}>
                <span>By continuing, you’re agreeing to our</span>
                <span>Customer Terms of Service, and Privacy Policy.</span>
            </div>
        </>
    );
};
const ConnectDetails = React.memo(Component);

export { ConnectDetails };
