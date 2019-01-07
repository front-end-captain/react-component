import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ButtonWrapper from "./Button.css.js";

const sizes = {
  small: "small",
  default: "default",
  large: "large"
};

const types = {
  primary: "primary",
  default: "default",
  danger: "danger",
  dashed: "dashed"
};

const htmlTypes = {
  button: "button",
  submit: "submit",
  reset: "reset"
};

const Button = ({
  children,
  className,
  onClick,
  disabled,
  loading,
  htmlType,
  type,
  size,
  prefixCls,
  ...resetProps
}) => {
  const isDisabled = disabled || loading ? { disabled: true } : { onClick };
  const baseProps = {
    ...resetProps,
    ...isDisabled,
    prefixCls,
    type: htmlType,
    className: classNames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-default`]: !disabled && type === types.default,
      [`${prefixCls}-normal`]: type === types.default,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-size-${size}`]: size !== sizes.default
    })
  };
  return <ButtonWrapper {...baseProps}>{children || "Button"}</ButtonWrapper>;
};

Button.defaultProps = {
  prefixCls: "viking-btn",
  loading: false,
  type: types.default,
  size: sizes.default,
  htmlType: htmlTypes.button,
  disabled: false
};

Button.propTypes = {
  prefixCls: PropTypes.string,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(types)),
  size: PropTypes.oneOf(Object.values(sizes)),
  htmlType: PropTypes.oneOf(Object.values(htmlTypes)),
  disabled: PropTypes.bool
};

export default Button;
