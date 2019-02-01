import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import confirm from "./confirm.jsx";
import Button from "./../Button/index.js";
import { CloseIcon, InfoIcon, SuccessIcon, ErrorIcon, WarningIcon } from "./../Icon/index.jsx";

import { MaskWrapper, Wrapper, ModalWrapper } from "./modal.css.js";

class Modal extends React.Component {
  static defaultProps = {
    prefixCls: "sky-modal",
    title: "",
    getPopupContainer: () => document.body,
    visible: false,
    confirmLoading: false,
    closable: true,
    width: 520,
    okText: "确认",
    cancelText: "取消",
    maskClosable: true,
    destroyOnClose: false,
    style: {},
    maskStyle: {},
    bodyStyle: {},
    zIndex: 999,
    mask: true,
    centered: false,
    okButtonProps: {},
    cancelButtonProps: {},
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    visible: PropTypes.bool,
    wrapClassName: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    getPopupContainer: PropTypes.func,
    confirmLoading: PropTypes.bool,
    closable: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    footer: PropTypes.oneOfType([PropTypes.instanceOf(null), PropTypes.element]),
    okText: PropTypes.string,
    cancelText: PropTypes.string,
    maskClosable: PropTypes.bool,
    /* eslint-disable-next-line */
    destroyOnClose: PropTypes.bool,
    style: PropTypes.objectOf(PropTypes.string),
    maskStyle: PropTypes.objectOf(PropTypes.string),
    bodyStyle: PropTypes.objectOf(PropTypes.string),
    zIndex: PropTypes.number,
    mask: PropTypes.bool,
    centered: PropTypes.bool,
    okButtonProps: PropTypes.objectOf(PropTypes.string),
    cancelButtonProps: PropTypes.objectOf(PropTypes.string),
  };

  static getDerivedStateFromProps({ visible, destroyOnClose }, { destroy, firstMount }) {
    if (visible) {
      return {
        firstMount: false,
        destroy: false,
      };
    }

    if (!visible && destroyOnClose && !destroy && !firstMount) {
      return {
        destroy: true,
      };
    }

    return null;
  }

  static iconClassName = "sky-modal-confirm-icon";

  static info = (props) => {
    const config = {
      type: "info",
      icon: <InfoIcon className={classNames(Modal.iconClassName, `${Modal.iconClassName}-info`)} />,
      ...props,
    };
    return confirm(config);
  };

  static success = (props) => {
    const config = {
      type: "success",
      icon: (
        <SuccessIcon
          className={classNames(Modal.iconClassName, `${Modal.iconClassName}-success`)}
        />
      ),
      ...props,
    };
    return confirm(config);
  };

  static error = (props) => {
    const config = {
      type: "error",
      icon: (
        <ErrorIcon className={classNames(Modal.iconClassName, `${Modal.iconClassName}-error`)} />
      ),
      ...props,
    };
    return confirm(config);
  };

  static warning = (props) => {
    const config = {
      type: "warning",
      icon: (
        <WarningIcon
          className={classNames(Modal.iconClassName, `${Modal.iconClassName}-warning`)}
        />
      ),
      ...props,
    };
    return confirm(config);
  };

  state = {
    firstMount: true,
    destroy: false,
  };

  onCancel = (event) => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel(event);
    }
  };

  onOk = (event) => {
    const { onOk } = this.props;
    if (onOk) {
      onOk(event);
    }
  };

  renderFooter = () => {
    const {
      footer,
      confirmLoading,
      okText,
      cancelText,
      okButtonProps,
      cancelButtonProps,
    } = this.props;
    if (footer === null) {
      return null;
    }
    if (footer) {
      return footer;
    }

    return (
      <div className="sky-modal-footer-container">
        <Button onClick={this.onCancel} {...okButtonProps}>
          <span>{cancelText}</span>
        </Button>
        <Button type="primary" loading={confirmLoading} onClick={this.onOk} {...cancelButtonProps}>
          <span>{okText}</span>
        </Button>
      </div>
    );
  };

  render() {
    const { firstMount, destroy } = this.state;

    if (firstMount) {
      return null;
    }

    const {
      visible,
      prefixCls,
      wrapClassName,
      title,
      children,
      getPopupContainer,
      closable,
      width,
      maskClosable,
      style,
      maskStyle,
      bodyStyle,
      zIndex,
      mask,
      centered,
    } = this.props;

    const maskClassNames = classNames(`${prefixCls}-mask`, {
      [`${prefixCls}-mask-show`]: visible,
      [`${prefixCls}-mask-hide`]: !visible,
    });
    const wrapperClassNames = classNames(`${prefixCls}-wrapper`, wrapClassName, {
      [`${prefixCls}-centered`]: centered,
    });
    const ModalClassNames = classNames(`${prefixCls}`, {
      [`${prefixCls}-open`]: visible,
      [`${prefixCls}-close`]: !visible,
    });

    return createPortal(
      <div>
        {mask && (
          <MaskWrapper
            className={maskClassNames}
            prefixCls={prefixCls}
            onClick={maskClosable ? this.onCancel : undefined}
            style={{ ...maskStyle }}
          />
        )}

        <Wrapper className={wrapperClassNames} prefixCls={prefixCls}>
          {!destroy && (
            <ModalWrapper
              className={ModalClassNames}
              prefixCls={prefixCls}
              width={width}
              style={{ ...style }}
              zIndex={zIndex}
            >
              <div className="sky-modal-content">
                {closable && (
                  <button className="sky-modal-close" type="button" onClick={this.onCancel}>
                    <span className="sky-modal-close-container">
                      <CloseIcon />
                    </span>
                  </button>
                )}

                <div className="sky-modal-header">
                  <div className="sky-modal-title">{title}</div>
                </div>
                <div className="sky-modal-body" style={{ ...bodyStyle }}>
                  {children}
                </div>
                <div className="sky-modal-footer">{this.renderFooter()}</div>
              </div>
            </ModalWrapper>
          )}
        </Wrapper>
      </div>,
      getPopupContainer(),
    );
  }
}

export default Modal;
