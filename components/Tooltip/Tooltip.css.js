import styled from "styled-components";

import { defaultBoxShadow } from "./../_style/vars.js";
import { skySlideDown, skySlideDownOut } from "./../_style/animate.js";

// Wrapper
const TooltipWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
`;

// OverlayContent
const OverlayContent = styled.div`
  position: absolute;
  background-clip: border-box;
  box-shadow: ${defaultBoxShadow};
  color: #fff;
  padding: 5px 15px;
  font-size: 14px;
  word-break: break-all;
  z-index: 999;
  transform: scale(0);
  background-color: #555;
  border-radius: 4px;

  &.${(props) => props.prefixCls}-hide {
    display: none;
    pointer-events: none;
  }

  &.${(props) => props.prefixCls}-position-top.${(props) => props.prefixCls}-show {
    animation: ${skySlideDown} 0.5s ease-in-out forwards;
  }

  &.${(props) => props.prefixCls}-position-top.${(props) => props.prefixCls}-hide {
    animation: ${skySlideDownOut} 0.5s ease-in-out forwards;
  }
`;

// Trigger
const TriggerWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
`;

export { TooltipWrapper, OverlayContent, TriggerWrapper };
