import { IUIKit } from '../../../../../helpers/ui-kit/types'
import { DefaultInput } from '../DefaultInput'
import { InputTypes } from '../../../../../helpers/constants/enum'

export const InputsVariants: IUIKit[] = [
  {
    name: 'Input(password)',
    props: {
      type: InputTypes.PASSWORD,
      key: 'inputPassword',
      name: 'inputPassword',
      isShow: true,
    },
    component: function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return <DefaultInput {...this.props} />
    },
  },
  {
    name: 'Input(text)',
    props: {
      type: InputTypes.TEXT,
      key: 'inputText',
      name: 'inputText',
    },
    component: function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return <DefaultInput {...this.props} />
    },
  },
]
