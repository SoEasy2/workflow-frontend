import { delayBeforeSend } from './constants';

export default (startDate: Date) => {
  const msInSecond = 1000;
  const endDate = new Date(startDate);
  endDate.setSeconds(endDate.getSeconds() + delayBeforeSend);
  if (endDate < new Date()) return 0;
  return Math.round((endDate.getTime() - Date.now()) / msInSecond);
};
