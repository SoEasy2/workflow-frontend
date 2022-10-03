import React, { useId } from 'react';
import styles from './Details.module.scss';
import { detailsInputs } from '../../../../../helpers/constants/registration/inputs';
import { CustomSelect } from '../../../../UI-Kit/Inputs/CustomSelect';
import { detailsOptions } from '../../../../../helpers/constants/registration/options';
import { DefaultInput } from '../../../../UI-Kit/Inputs/DefaultInput';


const Component:React.FC = () => {
    return (
        <>
            <div className={styles.formDetails__wrapper__title}>
                <h4 className={styles.formDetails__title}>Company details</h4>
            </div>
            <div className={styles.formDetails__form}>
                { detailsInputs.map((i, index) => {
                    if (index === 2) {
                        return (
                            <>
                            <CustomSelect options={detailsOptions} key={useId()} placeholder={'Choose'} />
                            <DefaultInput type={i.type} key={useId()} name={i.name} label={i.label} disabled={i.disabled} isShow={i.isShow} />
                            </>
                        )
                    }
                    return (
                        <DefaultInput type={i.type} key={useId()} name={i.name} label={i.label} disabled={i.disabled} isShow={i.isShow} />
                    )
                }) }
                <div className={styles.formDetails__wrapper__button}>
                    <button className={styles.formDetails__button}>Get started</button>
                </div>
            </div>
            <div className={styles.formDetails__login}>
                <span>You have a code?</span><button>Join your team</button>
            </div>
        </>
    );
};
const Details = React.memo(Component)

export { Details };