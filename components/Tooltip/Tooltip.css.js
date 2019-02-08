import styled from "styled-components";

import { defaultBoxShadow } from "./../_style/vars.js";
import {
  skySlideBottom,
  skySlideBottomOut,
  skySliderUp,
  skySliderUpOut,
  skySliderLeft,
  skySliderLeftOut,
  skySliderRight,
  skySliderRightOut,
} from "./../_style/animate.js";

const TooltipWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const OverlayContent = styled.div`
  position: absolute;
  background-clip: border-box;
  box-shadow: ${defaultBoxShadow};
  color: #fff;
  padding: 8px 15px;
  font-size: 14px;
  word-break: break-all;
  z-index: 999;
  transform: scale(0);
  background-color: #555;
  border-radius: 4px;

  &:after,
  &:before {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    z-index: -1;
  }

  &.${(props) => props.prefixCls}-position-top {
    margin-top: -10px;

    &:after,
    &:before {
      left: 50%;
      top: 85%;
      border-top-color: #555;
      border-bottom: none;
      transform: translateX(-50%);
    }
  }

  &.${(props) => props.prefixCls}-position-bottom {
    margin-top: 10px;

    &:after,
    &:before {
      left: 50%;
      bottom: 85%;
      border-top: none;
      border-bottom-color: #555;
      transform: translateX(-50%);
    }
  }

  &.${(props) => props.prefixCls}-position-left {
    margin-left: -10px;

    &:after,
    &:before {
      transform: translateY(-50%);
      top: 50%;
      border-right: none;
      border-left-color: #555;
      left: 95%;
    }
  }

  &.${(props) => props.prefixCls}-position-right {
    margin-left: 10px;

    &:after,
    &:before {
      transform: translateY(-50%);
      top: 50%;
      border-left: none;
      border-right-color: #555;
      right: 95%;
    }
  }

  &.${(props) => props.prefixCls}-not-display {
    margin-left: -10000px;
  }

  &.${(props) => props.prefixCls}-show {
    &.${(props) => props.prefixCls}-position-top {
      animation: ${skySlideBottom} 0.5s ease-in-out forwards;
    }

    &.${(props) => props.prefixCls}-position-bottom {
      animation: ${skySliderUp} 0.5s ease-in-out forwards;
    }

    &.${(props) => props.prefixCls}-position-right {
      animation: ${skySliderRight} 0.5s ease-in-out forwards;
    }

    &.${(props) => props.prefixCls}-position-left {
      animation: ${skySliderLeft} 0.5s ease-in-out forwards;
    }
  }

  &.${(props) => props.prefixCls}-hide {
    opacity: 0;
    pointer-events: none;

    &.${(props) => props.prefixCls}-position-top {
      animation: ${skySlideBottomOut} 0.5s ease-in-out forwards;
    }

    &.${(props) => props.prefixCls}-position-bottom {
      animation: ${skySliderUpOut} 0.5s ease-in-out forwards;
    }

    &.${(props) => props.prefixCls}-position-right {
      animation: ${skySliderRightOut} 0.5s ease-in-out forwards;
    }

    &.${(props) => props.prefixCls}-position-left {
      animation: ${skySliderLeftOut} 0.5s ease-in-out forwards;
    }
  }
`;

const TriggerWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
`;

export { TooltipWrapper, OverlayContent, TriggerWrapper };
