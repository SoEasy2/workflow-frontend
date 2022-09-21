import React from 'react';
import {ButtonTypes} from '../../../helpers/constants/enum/buttonTypes';
import cx from 'classnames';
import styles from './Button.module.scss';

interface IButtonProps {
    type: ButtonTypes,
    onClick?: () => void,
    text?: string,
    className?: string,
}

const Button:React.FC<IButtonProps> = ({ type, onClick, text, className }) => {
    return (
        <button
            className={cx(
                styles.button,
                type === ButtonTypes.ACTIVE && styles.active,
                type === ButtonTypes.DISABLED && styles.disabled,
                type === ButtonTypes.DEFAULT && styles.default,
                className
            )}
            onClick={onClick} >
            { text }
        </button>
    );
};

export { Button };