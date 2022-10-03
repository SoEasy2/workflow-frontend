import React, { useEffect, useRef, useState } from 'react';
import styles from './CustomSelect.module.scss';
import { IOption } from './components/Option/interface';
import { HelperHideSelectIcon, HelperOpenSelectIcon } from '../../../../helpers/icons/helper';
import { OptionList } from './components/OptionList';
import cx from 'classnames';

interface ISelect {
    options: IOption[];
    placeholder?: string;
}
const Component: React.FC<ISelect> = ({ options, placeholder }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<IOption | null>(null);
    const handleClick = (option: IOption) => {
        setValue(option);
        setOpen(false);
    }
    const rootEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onClick = (e: any) => rootEl.current?.contains(e.target) || setOpen(false);
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);
    console.log(value, setValue);
    return (
        <div className={styles.select} ref={rootEl}>
            <button onClick={() => setOpen(prev => !prev)} className={cx(styles.select__button, open && styles.select__button_active)}>
                <span>{ value ? value.label : placeholder }</span>
                {
                    open ? <HelperOpenSelectIcon /> : <HelperHideSelectIcon />
                }
            </button>
            {
                open && <OptionList options={options} handleClick={handleClick}  />
            }
        </div>
    );
};
const CustomSelect = React.memo(Component)

export { CustomSelect };