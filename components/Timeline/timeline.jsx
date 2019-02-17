import React, { Children, cloneElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import TimelineItem from "./timelineItem.jsx";
import { CircleLoadingIcon } from "./../Icon/index.jsx";

import { TimelineWrapper } from "./timeline.css.js";

const Timeline = (props) => {
  const { prefixCls, style, className, pending, mode, pendingDot, children } = props;

  const timelineWrapperClassName = classNames(
    `${prefixCls}-wrapper`,
    className,
    `${prefixCls}-wrapper-${mode}`,
    {
      [`${prefixCls}-wrapper-pending`]: pending,
    },
  );

  const pendingNode = typeof pending === "boolean" ? null : pending;
  const pendingItem = pending ? (
    <TimelineItem
      pending={!!pending}
      dot={pendingDot || <CircleLoadingIcon className={`${prefixCls}-item-head-custom-icon`} />}
    >
      {pendingNode}
    </TimelineItem>
  ) : null;

  // const timelineItems = reverse
  //   ? [pendingItem, ...Children.toArray(children).reverse()]
  //   : [...Children.toArray(children), pendingItem];

  const timelineItems = [...Children.toArray(children), pendingItem];
  const realItems = timelineItems.filter((item) => item !== null);
  const itemsAmount = Children.count(realItems);

  const item = Children.map(realItems, (child, index) => {
    const last = pending ? index === itemsAmount - 2 : index === itemsAmount - 1;
    const left = (mode === "alternate" && index % 2 === 0) || mode === "left";
    const right = mode === "right" || !left;
    const itemClassName = classNames(child.props.className, {
      [`${prefixCls}-item-last`]: last,
      [`${prefixCls}-item-left`]: left,
      [`${prefixCls}-item-right`]: right,
    });

    return cloneElement(child, { className: itemClassName });
  });

  return (
    <TimelineWrapper className={timelineWrapperClassName} style={style} prefixCls={prefixCls}>
      {item}
    </TimelineWrapper>
  );
};

Timeline.defaultProps = {
  prefixCls: "sky-timeline",
  pending: false,
  // reverse: false,
  mode: "left",
};

Timeline.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  pending: PropTypes.oneOfType([PropTypes.bool, PropTypes.element, PropTypes.string]),
  style: PropTypes.objectOf(PropTypes.string),
  // reverse: PropTypes.bool,
  mode: PropTypes.oneOf(["left", "alternate", "right"]),
};

Timeline.Item = TimelineItem;

export default Timeline;
