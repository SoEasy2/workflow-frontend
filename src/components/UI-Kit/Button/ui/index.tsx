import { IUIKit } from '../../../../helpers/ui-kit/types'
import { Button } from '../Button'
import { ButtonTypes } from '../../../../helpers/constants/enum'

export const ButtonsVariants: IUIKit[] = [
  {
    name: 'Button',
    props: {
      type: ButtonTypes.ACTIVE,
      text: 'Button',
    },
    component: function (){
      return <Button {...this.props} />
    }

  },
]
