import React, { Component, Children, Fragment, cloneElement } from "react";
import PropTypes from "prop-types";
import { isFragment } from "react-is";
import classNames from "classnames";
import { TransitionGroup } from "react-transition-group";

import CollapseWrapper from "./collapse.css.js";

const toArray = (activeKey) => {
  let currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }
  return currentActiveKey;
};

class Collapse extends Component {
  static defaultProps = {
    prefixCls: "sky-collapse",
    accordion: false,
    bordered: true,
    onChange: () => {},
    defaultActiveKey: ["1"],
  };

  static propTypes = {
    style: PropTypes.objectOf(PropTypes.string),
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    defaultActiveKey: PropTypes.arrayOf(PropTypes.string),
    accordion: PropTypes.bool,
    destroyInactivePanel: PropTypes.bool,
    onChange: PropTypes.func,
    bordered: PropTypes.bool,
    expandIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  };

  constructor(props) {
    super(props);

    const { activeKey, defaultActiveKey } = props;
    let currentActiveKey = defaultActiveKey;

    if ("activeKey" in props) {
      currentActiveKey = activeKey;
    }

    this.state = {
      activeKey: toArray(currentActiveKey),
    };
  }

  handleChild = (child, index) => {
    if (!child) {
      return null;
    }

    const { activeKey } = this.state;
    const key = child.key || String(index);
    const { prefixCls, destroyInactivePanel, accordion, expandIcon } = this.props;
    const { header, className: headerClassName, disabled, style } = child.props;

    let isActive;
    if (accordion) {
      isActive = activeKey[0] === key;
    } else {
      isActive = activeKey.includes(key);
    }

    const props = {
      key,
      header,
      isActive,
      prefixCls,
      style,
      destroyInactivePanel,
      accordion,
      expandIcon,
      panelKey: key,
      className: headerClassName,
      children: child.props.children,
      onItemHeaderClick: disabled ? null : this.onItemHeaderClick,
    };

    return cloneElement(child, props);
  };

  getCollapseItem = () => {
    const { children } = this.props;
    const realChildren = isFragment(children) ? children.props.children : children;
    const newChildren = Children.map(realChildren, this.handleChild);

    if (isFragment(children)) {
      return <Fragment>{newChildren}</Fragment>;
    }

    return newChildren;
  };

  onItemHeaderClick = (key) => {
    const { activeKey } = this.state;
    const { accordion } = this.props;

    let newActiveKey;
    if (accordion) {
      newActiveKey = activeKey[0] === key ? [] : [key];
    } else {
      const index = activeKey.indexOf(key);
      newActiveKey = Array.from(activeKey);
      if (index > -1) {
        newActiveKey.splice(index, 1);
      } else {
        newActiveKey.push(key);
      }
    }

    this.setActiveKey(newActiveKey);
  };

  setActiveKey = (newActiveKey) => {
    if (!("activeKey" in this.props)) {
      this.setState({ activeKey: newActiveKey });
    }

    const { onChange, accordion } = this.props;
    onChange(accordion ? newActiveKey[0] : newActiveKey);
  };

  render() {
    const { prefixCls, className, style, bordered } = this.props;
    const collapseWrapperClassName = classNames(`${prefixCls}-wrapper`, className, {
      [`${prefixCls}-wrapper-no-bordered`]: !bordered,
    });

    return (
      <CollapseWrapper prefixCls={prefixCls} className={collapseWrapperClassName} style={style}>
        <TransitionGroup component={null}>{this.getCollapseItem()}</TransitionGroup>
      </CollapseWrapper>
    );
  }
}

export default Collapse;
