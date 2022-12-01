import React from 'react';
import styles from './SliderItem.module.scss';
import { ISliderItem } from './interfaces';

const Component: React.FC<ISliderItem> = ({ img, title, text }) => {
  return (
    <div className={styles.sliderItem}>
      <div className={styles.sliderItem__image}>
        <img
          src={img}
          alt='slider-img'
        />
      </div>
      <div className={styles.sliderItem__title}>{title}</div>
      <div className={styles.sliderItem__text}>{text}</div>
    </div>
  );
};

const SliderItem = React.memo(Component);

export { SliderItem };
