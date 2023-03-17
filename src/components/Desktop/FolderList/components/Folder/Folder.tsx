import React, { ReactElement } from 'react';
import { EnumLabelColors } from '../../../../../helpers/constants/enum/LabelColor';
import { Label } from '../Label';
import { Member } from '../Member';
import styles from './Folder.module.scss';

interface Members {
  link: string;
  name: string;
}

interface IFolder {
  type: string;
  icon: ReactElement;
  color: string;
  title: string;
  creator: string;
  countOfTasks: string;
  countOfMembers: Members[];
  newTasks: string;
  newAlerts: string;
}

const Component: React.FC<IFolder> = ({
  type,
  icon,
  color,
  title,
  creator,
  countOfTasks,
  countOfMembers,
  newTasks,
  newAlerts,
}) => {
  console.log(type);

  return (
    <div className={styles.folder}>
      <div
        className={styles.folder__top}
        style={{ background: color }}
      >
        <div className={styles.folder__icon}>{icon}</div>
        <div>
          <div className={styles.folder__title}>{title}</div>
          <div className={styles.folder__folder}>
            <div className={styles.folder__creator}>{creator}</div>
            <div className={styles.folder__dot}></div>
            <div className={styles.folder__task}>{countOfTasks}</div>
          </div>
        </div>
      </div>

      <div className={styles.folder__bottom_block}>
        <Member countOfMembers={countOfMembers} />
        <div className={styles.folder__counter}>
          <Label
            text={newTasks}
            color={EnumLabelColors.GREEN}
          />
          <Label
            text={newAlerts}
            color={EnumLabelColors.RED}
          />
        </div>
      </div>
    </div>
  );
};

const Folder = React.memo(Component);

export { Folder };
