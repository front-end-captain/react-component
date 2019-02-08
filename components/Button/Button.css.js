import styled from "styled-components";
import { primaryColor, dangerColor, defaultBorderColor, linkColor } from "./../_style/vars.js";
import { skySpinRotate } from "./../_style/animate.js";

const ButtonWrapper = styled.button`
  position: relative;
  line-height: 1.499;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  outline: none;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  height: 32px;
  user-select: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: ${defaultBorderColor};

  &:before {
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    background: #fff;
    opacity: 0.35;
    content: "";
    border-radius: inherit;
    z-index: 1;
    transition: opacity 0.2s;
    pointer-events: none;
    display: none;
  }

  &.${(props) => props.prefixCls}-default:hover {
    color: ${linkColor};
    border-color: ${linkColor};
  }

  &.${(props) => props.prefixCls}-danger {
    color: ${dangerColor};
    background-color: #f5f5f5;
    border-color: ${defaultBorderColor};
  }

  &.${(props) => props.prefixCls}-danger:hover {
    color: #fff;
    background-color: #ff4d4f;
    border-color: #ff4d4f;
  }

  &.${(props) => props.prefixCls}-primary {
    color: #fff;
    background-color: ${primaryColor};
    border-color: ${defaultBorderColor};
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  }

  &.${(props) => props.prefixCls}-primary:hover {
    color: #fff;
    background-color: ${linkColor};
    border-color: ${linkColor};
  }

  &.${(props) => props.prefixCls}-dashed {
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: ${defaultBorderColor};
    border-style: dashed;
  }

  &.${(props) => props.prefixCls}-dashed:hover {
    color: ${linkColor};
    background-color: #fff;
    border-color: ${linkColor};
  }

  &.${(props) => props.prefixCls}-disabled {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: ${defaultBorderColor};
    text-shadow: none;
    box-shadow: none;
  }

  &.${(props) => props.prefixCls}-size-large {
    padding: 0 15px;
    font-size: 16px;
    border-radius: 4px;
    height: 40px;
  }

  &.${(props) => props.prefixCls}-size-small {
    padding: 0 7px;
    font-size: 14px;
    border-radius: 4px;
    height: 24px;
  }

  &.${(props) => props.prefixCls}-loading:before {
    display: block;
  }

  &.${(props) => props.prefixCls}-loading .sky-loading {
    display: inline-block;
    vertical-align: middle;
    margin: -3px 10px 0 0;
    animation: ${skySpinRotate} 1s linear infinite;
  }

  &.${(props) => props.prefixCls}-block {
    width: 100%;
  }
`;

export default ButtonWrapper;
