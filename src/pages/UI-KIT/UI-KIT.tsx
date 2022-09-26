import styles from './UI-KIT.module.scss'
import { Item } from '../../components/UI-Kit/Item';
import { uiKitList } from '../../helpers/ui-kit';
import { useId } from 'react';

const UiKit = () => {
  return (
    <div className={styles.ui_kit}>
      <div className={styles.ui_kit_title}>
        <h6>UI KIT</h6>
      </div>
      <div className={styles.ui_kit_content}>
        <div className={styles.ui_kit_wrapper}>
            { uiKitList.map(i => <Item name={i.name} component={i.component} key={useId()} />) }
        </div>
      </div>
    </div>
  )
}

export { UiKit }
