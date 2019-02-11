import React, { Component, isValidElement, cloneElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { InfoIcon, SuccessIcon, ErrorIcon, WarningIcon, CloseIcon } from "./../Icon/index.jsx";

import AlertWrapper from "./alert.css.js";

const typeMap = {
  info: "info",
  warn: "warn",
  success: "success",
  error: "error",
};

class Alert extends Component {
  static defaultProps = {
    prefixCls: "sky-alert",
    type: "info",
    closable: false,
    showIcon: false,
    onClose: () => {},
    afterClose: () => {},
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.string),
    type: PropTypes.oneOf(Object.values(typeMap)),
    closable: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onClose: PropTypes.func,
    afterClose: PropTypes.func,
    showIcon: PropTypes.bool,
    icon: PropTypes.element,
  };

  state = {
    closing: false,
    closed: false,
  };

  animationTime = 500;

  getIcon = () => {
    const { icon, prefixCls, type } = this.props;

    const iconClassName = `${prefixCls}-icon`;

    if (isValidElement(icon)) {
      return cloneElement(icon, { className: iconClassName });
    }

    if (type === typeMap.success) {
      return <SuccessIcon className={iconClassName} />;
    }

    if (type === typeMap.warn) {
      return <WarningIcon className={iconClassName} />;
    }

    if (type === typeMap.error) {
      return <ErrorIcon className={iconClassName} />;
    }

    return <InfoIcon className={iconClassName} />;
  };

  handleClose = (event) => {
    const { onClose, afterClose } = this.props;

    this.setState({ closing: true }, () => {
      onClose(event);

      setTimeout(() => {
        this.setState({ closed: true, closing: false }, () => {
          afterClose();
        });
      }, this.animationTime);
    });
  };

  render() {
    const { closed, closing } = this.state;
    const { title, content, prefixCls, className, style, type, showIcon, closable } = this.props;

    const wrapperClassName = classNames(`${prefixCls}`, className, `${prefixCls}-${type}`, {
      [`${prefixCls}-show-icon`]: showIcon,
      [`${prefixCls}-no-content`]: !content,
      [`${prefixCls}-no-title`]: !title,
      [`${prefixCls}-closing`]: closing,
    });

    if (closed) {
      return null;
    }

    return (
      <AlertWrapper className={wrapperClassName} style={style} prefixCls={prefixCls}>
        {showIcon && (
          <div className={`${prefixCls}-icon`}>
            <span>{this.getIcon()}</span>
          </div>
        )}
        <div className={`${prefixCls}-container`}>
          {title && <span className={`${prefixCls}-title`}>{title}</span>}
          {content && <span className={`${prefixCls}-content`}>{content}</span>}
        </div>
        {closable && (
          <div className={`${prefixCls}-close-icon`}>
            <span onClick={this.handleClose}>
              <CloseIcon />
            </span>
          </div>
        )}
      </AlertWrapper>
    );
  }
}

export default Alert;
