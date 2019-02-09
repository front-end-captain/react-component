import React, { isValidElement, cloneElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { PointLoadingIcon } from "./../Icon/index.jsx";

import { SpinWrapper, Wrapper } from "./spin.css.js";

const getIndicator = (element, iconClassName) => {
  if (isValidElement(element)) {
    return cloneElement(element, { className: iconClassName });
  }

  return <PointLoadingIcon className={iconClassName} />;
};

const Spin = (props) => {
  const { prefixCls, className, style, spinning, tip, indicator, size, children } = props;

  const iconClassName = `${prefixCls}-spinning-icon`;
  const wrapClassName = classNames(`${prefixCls}-wrapper`, className, `${prefixCls}-${size}`, {
    [`${prefixCls}-spinning`]: spinning,
  });
  const childContainerClassName = classNames(`${prefixCls}-child-container`, {
    [`${prefixCls}-child-blur`]: spinning,
  });

  const spinContainer = (
    <SpinWrapper className={wrapClassName} style={style} prefixCls={prefixCls}>
      {getIndicator(indicator, iconClassName)}
      {tip && <span className={`${prefixCls}-tip`}>{tip}</span>}
    </SpinWrapper>
  );

  if (children !== undefined) {
    return (
      <Wrapper className={classNames(`${prefixCls}-nested-wrapper`)} prefixCls={prefixCls}>
        {spinning && spinContainer}
        <div className={childContainerClassName}>{children}</div>
      </Wrapper>
    );
  }

  return spinContainer;
};

Spin.defaultProps = {
  prefixCls: "sky-spin",
  size: "default",
  spinning: true,
};

Spin.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  tip: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  indicator: PropTypes.element,
  size: PropTypes.oneOf(["small", "default", "large"]),
  spinning: PropTypes.bool,
};

export default Spin;
