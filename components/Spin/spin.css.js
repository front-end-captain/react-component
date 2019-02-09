import styled from "styled-components";

import { primaryColor } from "./../_style/vars.js";
import { skySpinRotate } from "./../_style/animate.js";

const Wrapper = styled.div`
  position: relative;

  .${(props) => props.prefixCls}-wrapper {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    z-index: 4;
  }

  .${(props) => props.prefixCls}-child-container {
    position: relative;
    transition: opacity 0.3s;
  }

  .${(props) => props.prefixCls}-child-blur {
    pointer-events: none;
    user-select: none;
    overflow: hidden;
    opacity: 0.5;
  }

  .${(props) => props.prefixCls}-child-blur:after {
    display: block;
    opacity: 0.4;
    pointer-events: auto;
  }

  .${(props) => props.prefixCls}-child-container:after {
    display: none;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    pointer-events: none;
    transition: all 0.3s;
    height: 100%;
    width: 100%;
    z-index: 10;
    filter: blur(1px);
  }
`;

const SpinWrapper = styled.div`
  display: inline-block;
  text-align: center;

  .${(props) => props.prefixCls}-tip {
    display: block;
    color: ${primaryColor};
    font-size: 14px;
    margin-top: 4px;
  }

  &.${(props) => props.prefixCls}-spinning {
    .${(props) => props.prefixCls}-spinning-icon {
      display: inline-block;
      vertical-align: middle;
      color: ${primaryColor};
      font-size: 20px;
      width: 20px;
      height: 20px;
      animation: ${skySpinRotate} 1.2s linear infinite;
    }
  }

  &.${(props) => props.prefixCls}-small {
    .${(props) => props.prefixCls}-spinning-icon {
      font-size: 14px;
      width: 14px;
      height: 14px;
    }
  }

  &.${(props) => props.prefixCls}-large {
    .${(props) => props.prefixCls}-spinning-icon {
      font-size: 32px;
      width: 32px;
      height: 32px;
    }
  }
`;
export { SpinWrapper, Wrapper };
