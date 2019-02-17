import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { TimelineItemWrapper } from "./timeline.css.js";

const TimelineItem = (props) => {
  const { prefixCls, style, className, color, dot, pending, children } = props;

  const itemClassName = classNames(`${prefixCls}-item`, className, {
    [`${prefixCls}-item-pending`]: pending,
  });

  const itemDotClassName = classNames(`${prefixCls}-item-head`, {
    [`${prefixCls}-item-head-custom`]: dot,
  });

  return (
    <TimelineItemWrapper
      className={itemClassName}
      style={style}
      color={color}
      prefixCls={prefixCls}
    >
      <div className={`${prefixCls}-item-tail`} />
      <div className={itemDotClassName}>{dot}</div>
      <div className={`${prefixCls}-item-content`}>{children}</div>
    </TimelineItemWrapper>
  );
};

TimelineItem.defaultProps = {
  prefixCls: "sky-timeline",
  color: "blue",
  pending: false,
};

TimelineItem.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  dot: PropTypes.element,
  pending: PropTypes.oneOfType([PropTypes.bool, PropTypes.element, PropTypes.string]),
  style: PropTypes.objectOf(PropTypes.string),
};

export default TimelineItem;
