import React from 'react';
import { IDefaultInput } from '../Inputs/DefaultInput/interface';
import { InputTypes } from '../../../helpers/constants/enum';
import { DefaultInput } from '../Inputs/DefaultInput';
import { DateTimePicker } from '../Inputs/DateTimePicker/DateTimePicker';
import { CustomTextArea } from '../Inputs/CustomTextArea';
import { CustomSelect, ISelect } from '../Inputs/CustomSelect';

const getInputByType = (props: IDefaultInput) => {
  const { type } = props;
  switch (type) {
    case InputTypes.EMAIL: {
      return <DefaultInput {...props} />;
    }
    case InputTypes.EMAIL_OR_PHONE: {
      return <DefaultInput {...props} />;
    }
    case InputTypes.PASSWORD: {
      return <DefaultInput {...props} />;
    }
    case InputTypes.PHONE: {
      return <DefaultInput {...props} />;
    }
    case InputTypes.TEXT: {
      return <DefaultInput {...props} />;
    }
    case InputTypes.DATE: {
      return <DateTimePicker {...props} />;
    }
    case InputTypes.TEXTAREA: {
      return <CustomTextArea {...props} />;
    }
    case InputTypes.SELECT: {
      const { options, ...rest } = props as ISelect;
      return (
        <CustomSelect
          {...{ ...rest, options: options || [], classNameButton: props.classNameInput }}
        />
      );
    }
    default: {
      return <DefaultInput {...props} />;
    }
  }
};
interface IInputByType {
  input: IDefaultInput;
}
const Component: React.FC<IInputByType> = ({ input }) => {
  return <>{getInputByType(input)}</>;
};
const InputByType = React.memo(Component);

export { InputByType };
