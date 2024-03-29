import { useTransition } from 'react-spring';

export const tooltipTransition = (state: boolean) =>
  useTransition(state, {
    from: {
      opacity: 0,
      transform: 'scale(0)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
    },
    leave: {
      opacity: 0,
      transform: 'scale(0)',
    },
  });

export const previewMobileTransition = (state: boolean) =>
  useTransition(state, {
    from: {
      opacity: 1,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });

export const errorTransition = (state: boolean) =>
  useTransition(state, {
    from: {
      opacity: 0,
      transform: 'scale(0)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
    },
    leave: {
      opacity: 0,
      transform: 'scale(0)',
    },
  });

export const barTransitions = (state: boolean) =>
  useTransition(state, {
    from: {
      position: 'relative',
      right: 0,
      width: 0,
    },
    enter: {
      position: 'relative',
      right: 0,
      width: 580,
    },
    leave: {
      position: 'relative',
      right: 0,
      width: 0,
    },
  });
export const popupTransition = (state: boolean) =>
  useTransition(state, {
    from: {
      opacity: 0,
      transform: 'scale(0)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
    },
    leave: {
      opacity: 0,
      transform: 'scale(0)',
    },
  });

export const selectTransition = (state: boolean) =>
  useTransition(state, {
    from: {
      opacity: 0,
      transform: 'scale(0)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
    },
    leave: {
      opacity: 0,
      transform: 'scale(0)',
    },
  });
