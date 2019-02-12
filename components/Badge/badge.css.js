import styled from "styled-components";

import {
  defaultBorderColor,
  successColor,
  infoColor,
  errorColor,
  warningColor,
} from "./../_style/vars.js";

const BadgeWrapper = styled.div`
  font-size: 14px;
  font-variant: tabular-nums;
  font-feature-settings: "tnum";
  line-height: 1;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: inline-block;

  &.${(props) => props.prefixCls}-wrapper-status {
    vertical-align: middle;
    line-height: inherit;
  }

  .${(props) => props.prefixCls}-container {
    position: absolute;
    top: ${(props) => props.top}px;
    right: ${(props) => props.right}px;
    height: 20px;
    border-radius: 10px;
    min-width: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    font-weight: normal;
    white-space: nowrap;
    z-index: 10;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }

  .${(props) => props.prefixCls}-no-icon {
    background-color: #f5222d;
    color: #fff;
    box-shadow: 0 0 0 1px #fff;
  }

  .${(props) => props.prefixCls}-container-hide {
    display: none;
  }

  .${(props) => props.prefixCls}-container-show {
    display: inline-block;
  }

  .${(props) => props.prefixCls}-no-child {
    position: relative;
    display: block;
    top: auto;
    transform: none;
  }

  .${(props) => props.prefixCls}-multiple-words {
    padding: 0 8px;
  }

  .${(props) => props.prefixCls}-container-dotted {
    height: 6px;
    width: 6px;
    min-width: 6px;
    border-radius: 100%;
    background: #f5222d;
    z-index: 10;
    box-shadow: 0 0 0 1px #fff;
  }

  .${(props) => props.prefixCls}-status-dot {
    width: 6px;
    height: 6px;
    min-width: 6px;
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
    position: relative;
  }

  .${(props) => props.prefixCls}-status-text {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    margin-left: 8px;
  }

  .${(props) => props.prefixCls}-container-default {
    background-color: ${defaultBorderColor};
  }

  .${(props) => props.prefixCls}-container-success {
    background-color: ${successColor};
  }

  .${(props) => props.prefixCls}-container-error {
    background-color: ${errorColor};
  }

  .${(props) => props.prefixCls}-container-warn {
    background-color: ${warningColor};
  }

  .${(props) => props.prefixCls}-container-info {
    background-color: ${infoColor};
  }
`;

export default BadgeWrapper;
