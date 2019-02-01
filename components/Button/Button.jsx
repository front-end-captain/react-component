import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { LoadingIcon } from "./../Icon/index.jsx";

import ButtonWrapper from "./Button.css.js";

const sizes = { small: "small", default: "default", large: "large" };

const types = { primary: "primary", default: "default", danger: "danger", dashed: "dashed" };

const htmlTypes = { button: "button", submit: "submit", reset: "reset" };

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
  block,
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
      [`${prefixCls}-size-${size}`]: size !== sizes.default,
      [`${prefixCls}-block`]: block,
    }),
  };
  return (
    <ButtonWrapper {...baseProps}>
      {loading && <LoadingIcon className="sky-loading" />}
      <span>{children || "Button"}</span>
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  prefixCls: "sky-btn",
  loading: false,
  type: types.default,
  size: sizes.default,
  htmlType: htmlTypes.button,
  disabled: false,
  block: false,
};

export const ButtonPropTypes = {
  prefixCls: PropTypes.string,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(types)),
  size: PropTypes.oneOf(Object.values(sizes)),
  htmlType: PropTypes.oneOf(Object.values(htmlTypes)),
  disabled: PropTypes.bool,
  block: PropTypes.bool,
};

Button.propTypes = ButtonPropTypes;

export default Button;
