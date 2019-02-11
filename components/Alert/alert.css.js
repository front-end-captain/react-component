import styled from "styled-components";

import { skyAlertHide } from "./../_style/animate.js";

const AlertWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-feature-settings: "tnum";
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  position: relative;
  font-variant: tabular-nums;
  margin: 0;
  list-style: none;
  padding: 8px 15px 8px 16px;
  border-radius: 4px;

  &.${(props) => props.prefixCls}-closing {
    animation: ${skyAlertHide} 0.5s ease-out;
    animation-fill-mode: both;
    transform-origin: left top;
  }

  &.${(props) => props.prefixCls}-show-icon {
    padding: 8px 30px 8px 14px;
  }

  &.${(props) => props.prefixCls}-no-content {
    .${(props) => props.prefixCls}-title {
      margin-bottom: 0 !important;
    }

    .${(props) => props.prefixCls}-icon {
      align-items: center;
    }
  }

  &.${(props) => props.prefixCls}-no-title {
    .${(props) => props.prefixCls}-icon {
      font-size: 14px;
      align-items: center;
      padding-top: 0;
    }

    .${(props) => props.prefixCls}-container {
      flex: 14 1;
    }
  }

  &.${(props) => props.prefixCls}-success {
    background-color: rgba(82, 196, 26, 0.5);
    border: 1px solid rgb(82, 196, 26);

    .${(props) => props.prefixCls}-icon {
      color: rgb(82, 196, 26);
    }
  }

  &.${(props) => props.prefixCls}-info {
    background-color: rgba(19, 194, 194, 0.5);
    border: 1px solid rgb(19, 194, 194);

    .${(props) => props.prefixCls}-icon {
      color: rgb(19, 194, 194);
    }
  }

  &.${(props) => props.prefixCls}-warn {
    background-color: rgba(250, 140, 22, 0.5);
    border: 1px solid rgb(250, 140, 22);

    .${(props) => props.prefixCls}-icon {
      color: rgb(250, 140, 22);
    }
  }

  &.${(props) => props.prefixCls}-error {
    background-color: rgba(245, 34, 45, 0.5);
    border: 1px solid rgb(245, 34, 45);

    .${(props) => props.prefixCls}-icon {
      color: rgb(245, 34, 45);
    }
  }

  .${(props) => props.prefixCls}-icon {
    flex: 1 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 24px;
    padding-top: 2px;
  }

  .${(props) => props.prefixCls}-container {
    display: flex;
    flex-direction: column;
    flex: 10 1;

    .${(props) => props.prefixCls}-title {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
      display: block;
      margin-bottom: 4px;
    }

    .${(props) => props.prefixCls}-content {
      font-size: 14px;
      line-height: 22px;
    }
  }

  .${(props) => props.prefixCls}-close-icon {
    position: absolute;
    font-size: 14px;
    right: 12px;
    top: 10px;
    line-height: 22px;
    cursor: pointer;
    overflow: hidden;
  }
`;

export default AlertWrapper;
