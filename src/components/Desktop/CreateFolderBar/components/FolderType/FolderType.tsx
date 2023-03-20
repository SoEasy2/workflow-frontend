import React, { useId } from 'react';
import styles from './FolderType.module.scss';
import { FolderTypeCard } from './FolderTypeCard';
import { folderType } from './mockData';
interface FolderType {
  selectedFolderType: number;
  handleSelect: (index: number) => void;
}
const Component: React.FC<FolderType> = ({ handleSelect, selectedFolderType }) => {
  return (
    <div className={styles.FolderType}>
      <h4 className={styles.FolderType__title}>Folder Type</h4>
      <div className={styles.FolderType__card}>
        {folderType.map((elem, index) => {
          return (
            <FolderTypeCard
              key={useId()}
              index={index}
              icon={elem.icon}
              title={elem.title}
              text={elem.text}
              selected={selectedFolderType === index}
              onSelect={handleSelect}
            />
          );
        })}
      </div>
    </div>
  );
};

const FolderType = React.memo(Component);

export { FolderType };
