import { keyframes } from "styled-components";

export const skySpinRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const skyFadeOut = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }
`;

export const skyFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }

  to {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
  }
`;

export const skySlideBottom = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -15px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const skySlideBottomOut = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -15px, 0);
  }
`;

export const skySliderRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(15px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const skySliderRightOut = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(15px, 0, 0);
  }
`;

export const skySliderLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-15px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const skySliderLeftOut = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-15px, 0, 0);
  }
`;

export const skySliderUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 15px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const skySliderUpOut = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 15px, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
`;

export const skyMaskFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
  }
`;

export const skyMaskFadeOut = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
`;

export const skyMessageFadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
    transform: translateY(16px);
  }
`;

export const skyMessageFadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translateY(-50px);
  }
`;

export const skyAlertHide = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: scale(0);
  }
`;
