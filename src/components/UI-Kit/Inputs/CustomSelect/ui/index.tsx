import { IUIKit } from '../../../../../helpers/ui-kit/types'
import { CustomSelect } from '../CustomSelect'
import { IOption } from '../components/Option/interface'

const options: IOption[] = [
  {
    label: 'option1',
    value: 1,
  },
  {
    label: 'option2',
    value: 2,
  },
]

export const select: IUIKit[] = [
  {
    name: 'Select',
    props: {
      options,
      placeholder: 'Select',
    },
    component: function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return <CustomSelect {...this.props} />
    },
  },
]
