export interface IInput {
    name: string;
    type?: string;
    placeholder?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    errorEmpty?: string;
    errorInvalid?: string;
    label?: string;
}