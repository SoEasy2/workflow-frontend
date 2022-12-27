import { ISliderItem } from '../../../components/Mobile/Authentication/Registration/Slider/SliderItem/interfaces';
import firstElement from '../../../assets/images/Mobile/WelcomeSlider/firstElement.png';
import secondElement from '../../../assets/images/Mobile/WelcomeSlider/secondElement.png';
import thirdElement from '../../../assets/images/Mobile/WelcomeSlider/thirdElement.png';

export const slides: ISliderItem[] = [
  {
    img: firstElement,
    text: 'Collaborate with team. Organize and automate a routine with task templates.',
    title: 'Connect team and achieve goals together',
  },
  {
    img: secondElement,
    text: 'You will never forget to do something important with smart notifications.',
    title: 'Get smart reminders anywhere',
  },
  {
    img: thirdElement,
    text: 'More tools: you can use both the mobile application and the web version.',
    title: 'Stay connected with team wherever you are',
  },
];
