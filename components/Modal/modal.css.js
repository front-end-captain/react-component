import styled from "styled-components";

import { skyMaskFadeIn, skyMaskFadeOut, skyFadeIn, skyFadeOut } from "./../_style/animate.js";
import { successColor, infoColor, warningColor, errorColor } from "./../_style/vars.js";

export const MaskWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
  height: 100%;
  z-index: 1000;

  &.${(props) => props.prefixCls}-mask-hide {
    pointer-events: none;
    animation: ${skyMaskFadeOut} 0.5s linear forwards;
  }

  &.${(props) => props.prefixCls}-mask-show {
    pointer-events: auto;
    animation: ${skyMaskFadeIn} 0.5s linear forwards;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  outline: 0;
  pointer-events: none;

  &.${(props) => props.prefixCls}-centered {
    text-align: center;

    &:before {
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      width: 0;
    }

    .${(props) => props.prefixCls} {
      display: inline-block;
      top: 0;
      vertical-align: middle;
      text-align: left;
    }
  }

  &.sky-modal-confirm {
    .sky-modal-header,
    .sky-modal-footer {
      display: none;
    }
  }
`;

export const ModalWrapper = styled.div`
  pointer-events: auto;
  box-shadow: 0 4px 22px 0 rgba(15, 35, 95, 0.12);
  background-color: #fff;
  border-radius: 4px;
  width: ${(props) => props.width}px;
  max-height: calc(100vh - 48px);
  z-index: ${(props) => props.zIndex};
  transform-origin: bottom center;
  outline: none;
  position: relative;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  transform: scale(0);
  top: 100px;

  &.${(props) => props.prefixCls}-open {
    pointer-events: auto;
    animation: ${skyFadeIn} 0.5s linear forwards;
  }

  &.${(props) => props.prefixCls}-close {
    pointer-events: none;
    animation: ${skyFadeOut} 0.5s linear forwards;
  }

  .sky-modal-content {
    .sky-modal-close {
      cursor: pointer;
      border: 0;
      background: transparent;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 10;
      font-weight: 700;
      line-height: 1;
      text-decoration: none;
      transition: color 0.3s;
      color: rgba(0, 0, 0, 0.45);
      outline: 0;
      padding: 0;

      .sky-modal-close-container {
        display: block;
        font-style: normal;
        text-align: center;
        text-transform: none;
        text-rendering: auto;
        width: 56px;
        height: 56px;
        line-height: 56px;
        font-size: 20px;
      }
    }

    .sky-modal-header {
      padding: 16px 24px;
      border-radius: 4px 4px 0 0;
      background: #fff;
      color: rgba(0, 0, 0, 0.65);
      border-bottom: 1px solid #e8e8e8;

      .sky-modal-title {
        margin: 0;
        font-size: 16px;
        line-height: 22px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
      }
    }

    .sky-modal-body {
      padding: 24px;
      font-size: 14px;
      line-height: 1.5;
      word-wrap: break-word;
    }

    .sky-modal-footer {
      border-top: 1px solid #e8e8e8;
      padding: 10px 16px;
      text-align: right;
      border-radius: 0 0 4px 4px;

      button + button {
        margin-left: 8px;
        margin-bottom: 0;
      }
    }
  }
`;

export const ConfirmModalWrapper = styled.div`
  .${(props) => props.prefix}-confirm-modal-body {
    .${(props) => props.prefix}-title {
      display: flex;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      font-size: 16px;
      overflow: hidden;

      .sky-modal-confirm-icon {
        font-size: 22px;
        margin-right: 16px;
      }

      .sky-modal-confirm-icon-info {
        color: ${infoColor};
      }

      .sky-modal-confirm-icon-success {
        color: ${successColor};
      }

      .sky-modal-confirm-icon-error {
        color: ${errorColor};
      }

      .sky-modal-confirm-icon-warning {
        color: ${warningColor};
      }
    }

    .${(props) => props.prefix}-content {
      margin-left: 38px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
      margin-top: 8px;
    }
  }

  .${(props) => props.prefix}-confirm-btn {
    margin-top: 24px;
    text-align: right;
  }
`;
