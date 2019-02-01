import React from "react";
import { render } from "react-dom";
import classNames from "classnames";

import Modal from "./modal.jsx";
import Button from "./../Button/index.js";

import { ConfirmModalWrapper } from "./modal.css.js";

const ConfirmModal = (props) => {
  const {
    prefixCls,
    className,
    content,
    mask,
    maskClosable,
    title,
    okText,
    visible,
    width,
    zIndex,
    type,
    icon,
    close,
    centered,
  } = props;

  const prefixClassName = prefixCls || "sky-modal";

  const contentPrefixCls = `${prefixClassName}-confirm`;

  const cls = classNames("sky-modal-confirm", `${contentPrefixCls}-${type}`, className);

  const config = {
    prefixCls: prefixClassName,
    contentPrefixCls,
    width: width || 416,
    mask: mask === undefined ? true : mask,
    maskClosable: maskClosable === undefined ? false : maskClosable,
    closable: false,
    title: "",
    footer: null,
    visible,
    wrapClassName: cls,
    zIndex,
    onCancel: close,
    centered,
  };

  return (
    <Modal {...config}>
      <ConfirmModalWrapper prefix={contentPrefixCls}>
        <div className={`${contentPrefixCls}-confirm-modal-body`}>
          <span className={`${contentPrefixCls}-title`}>
            {icon}
            {title}
          </span>
          <div className={`${contentPrefixCls}-content`}>{content}</div>
        </div>
        <div className={`${contentPrefixCls}-confirm-btn`}>
          <Button type="primary" onClick={close}>
            {okText || "知道了"}
          </Button>
        </div>
      </ConfirmModalWrapper>
    </Modal>
  );
};

const confirm = (config) => {
  const mountNode = document.createElement("div");
  document.body.appendChild(mountNode);

  let currentConfig = { ...config, visible: true };

  const renderConfirm = (props) => {
    render(<ConfirmModal {...props} />, mountNode);
  };

  const update = (newConfig) => {
    currentConfig = {
      ...currentConfig,
      ...newConfig,
    };

    renderConfirm(currentConfig);
  };

  const close = () => {
    currentConfig = {
      ...currentConfig,
      visible: false,
    };

    renderConfirm(currentConfig);
  };

  currentConfig = { ...currentConfig, close, visible: true };

  renderConfirm(currentConfig);

  return {
    destroy: close,
    update,
  };
};

export default confirm;
