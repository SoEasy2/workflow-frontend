import cx from 'classnames';
import React from 'react';
import styles from './FolderTypeCard.module.scss';

interface FolderTypeCard {
  icon: () => JSX.Element;
  title: string;
  text: string;
  selected: boolean;
  onSelect: (index: number) => void;
  index: number;
}

const Component: React.FC<FolderTypeCard> = ({ icon, title, text, selected, onSelect, index }) => {
  return (
    <div
      className={styles.folderTypeCard}
      onClick={() => onSelect(index)}
    >
      <div className={cx(styles.folderTypeCard__icon, selected && styles.selected)}>{icon()}</div>
      <div className={styles.folderTypeCard__title}>{title}</div>
      <div className={styles.folderTypeCard__text}>{text}</div>
    </div>
  );
};

const FolderTypeCard = React.memo(Component);

export { FolderTypeCard };
