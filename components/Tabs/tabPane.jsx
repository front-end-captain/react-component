import React from "react";
import classNames from "classnames";

const TabPane = ({ children, isActive, prefixCls, disabled }) => {
  const paneClassName = classNames(`${prefixCls}-pane-item`, {
    [`${prefixCls}-pane-item-active`]: isActive,
    [`${prefixCls}-pane-item-inactive`]: !isActive,
    [`${prefixCls}-pane-item-disabled`]: disabled,
  });

  return <div className={paneClassName}>{children}</div>;
};

export default TabPane;
