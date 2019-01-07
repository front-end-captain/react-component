import styled from "styled-components";
import { primaryColor } from "./../_style/vars.js";

const ButtonWrapper = styled.button`
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
  position: relative;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;

  &.${props => props.prefixCls}-danger {
    color: #f5222d;
    background-color: #f5f5f5;
    border-color: #d9d9d9;
  }

  &.${props => props.prefixCls}-danger:hover {
    color: #fff;
    background-color: #ff4d4f;
    border-color: #ff4d4f;
  }

  &.${props => props.prefixCls}-primary {
    color: #fff;
    background-color: ${primaryColor};
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  }

  &.${props => props.prefixCls}-primary:hover {
    color: #fff;
    background-color: #40a9ff;
    border-color: #40a9ff;
  }

  &.${props => props.prefixCls}[disabled] {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }
`;

export default ButtonWrapper;
