import React, { isValidElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import BadgeWrapper from "./badge.css.js";

const Badge = (props) => {
  const {
    prefixCls,
    className,
    style,
    count,
    overCount,
    dot,
    offset,
    showZero,
    status,
    text,
    title,
    children,
    wrapStyle,
  } = props;

  const [right, top] = offset;

  const isDot = dot || (status !== null && typeof status === "string");

  const wrapperClassName = classNames(`${prefixCls}-wrapper`, className, {
    [`${prefixCls}-wrapper-status`]: status !== null && typeof status === "string",
  });
  const badgeClassName = classNames(`${prefixCls}-container`, `${prefixCls}-container-${status}`, {
    [`${prefixCls}-container-hide`]: Number(count) === 0 && !showZero && !dot,
    [`${prefixCls}-container-show`]: showZero,
    [`${prefixCls}-container-dotted`]: dot,
    [`${prefixCls}-no-icon`]: !Number.isNaN(Number(count)),
    [`${prefixCls}-no-child`]: children === undefined,
    [`${prefixCls}-multiple-words`]: Number(count).toString().length >= 2,
    [`${prefixCls}-status-dot`]: status !== null && typeof status === "string",
  });

  const getCountNode = (count) => {
    // count 为自定义 icon
    if (Number.isNaN(Number(count))) {
      if (isValidElement(count)) {
        return count;
      }
    }

    return count > overCount ? `${overCount}+` : count;
  };

  return (
    <BadgeWrapper
      className={wrapperClassName}
      style={wrapStyle}
      prefixCls={prefixCls}
      top={top}
      right={right}
    >
      <div className={badgeClassName} style={style} title={title}>
        {!isDot && getCountNode(count)}
      </div>
      {status !== null && typeof status === "string" && text && (
        <span className={`${prefixCls}-status-text`}>{text}</span>
      )}
      {children && <div className={`${prefixCls}-child`}>{children}</div>}
    </BadgeWrapper>
  );
};

const defaultCount = 0;

Badge.defaultProps = {
  prefixCls: "sky-badge",
  count: defaultCount,
  overCount: 99,
  dot: false,
  offset: [0, 0],
  showZero: false,
  status: null,
  text: "",
  title: defaultCount.toString(),
};

Badge.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  wrapStyle: PropTypes.objectOf(PropTypes.string),
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.element]),
  overCount: PropTypes.number,
  dot: PropTypes.bool,
  offset: PropTypes.arrayOf(PropTypes.number),
  showZero: PropTypes.bool,
  status: PropTypes.oneOf(["default", "success", "error", "warn", "info"]),
  text: PropTypes.string,
  title: PropTypes.string,
};

export default Badge;
