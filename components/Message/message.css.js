import styled from "styled-components";

import { infoColor, errorColor, warningColor, successColor } from "./../_style/vars.js";
import { skySpin, skyMessageFadeIn, skyMessageFadeOut } from "./../_style/animate.js";

export const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: fixed;
  z-index: 1010;
  width: 100%;
  top: ${(props) => props.top}px;
  left: 0;
  pointer-events: none;

  .sky-message-fade {
    transition: all 0.3s;
  }

  .sky-message-fade-enter {
    opacity: 0;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
    animation-play-state: paused;
  }

  .sky-message-fade-enter-active {
    animation-name: ${skyMessageFadeIn};
    animation-play-state: running;
  }

  .sky-message-fade-exit {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
    animation-play-state: paused;
  }

  .sky-message-fade-exit-active {
    animation-name: ${skyMessageFadeOut};
    animation-play-state: running;
  }
`;

export const Item = styled.div`
  padding: 8px;
  text-align: center;
`;

export const ItemContent = styled.div`
  padding: 10px 16px;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: #fff;
  display: inline-block;
  vertical-align: middle;
  pointer-events: all;

  .sky-message-icon {
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    font-size: 16px;
  }

  .sky-message-icon-info {
    color: ${infoColor};
  }

  .sky-message-icon-error {
    color: ${errorColor};
  }

  .sky-message-icon-warn {
    color: ${warningColor};
  }

  .sky-message-icon-success {
    color: ${successColor};
  }

  .sky-message-icon-loading {
    color: ${infoColor};
    animation: ${skySpin} 1.5s linear infinite;
  }
`;
