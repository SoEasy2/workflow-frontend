import { useTransition } from 'react-spring'

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
  })