import React, { useId } from 'react';
import styles from './Slider.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlickSlider from 'react-slick';
import { IProps } from './interfaces';
import cx from 'classnames';
import { SliderItem } from './SliderItem';
import { settings } from './constants';
import './dots.scss';
const Component: React.FC<IProps> = ({ className, slides, customSettings }) => {
  const getSettings = () =>
    customSettings ? customSettings : { ...settings, dotsClass: 'button__bar' };

  return (
    <div className={cx(styles.slider, className)}>
      <SlickSlider {...getSettings()}>
        {slides.map(({ img, text, title }) => (
          <SliderItem
            img={img}
            text={text}
            title={title}
            key={useId()}
          />
        ))}
      </SlickSlider>
    </div>
  );
};

const Slider = React.memo(Component);

export { Slider };
