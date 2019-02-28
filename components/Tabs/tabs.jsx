import React, { Fragment, Children, cloneElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { isFragment } from "react-is";

import TabPane from "./tabPane.jsx";

import { TabsWrapper, TabsPaneWrapper, TabsHeaderWrapper } from "./tab.css.js";

class Tabs extends React.Component {
  static defaultProps = {
    prefixCls: "sky-tab",
    defaultActiveKey: 1,
    type: "line",
    onChange: () => {},
    onTabClick: () => {},
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.string),
    type: PropTypes.oneOf(["line", "card"]),
    tabBarStyle: PropTypes.objectOf(PropTypes.string),
    activeKey: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    tabBarExtraContent: PropTypes.element,
    onChange: PropTypes.func,
    onTabClick: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.tabsHeader = React.createRef();

    this.state = {
      activeKey: Number(props.activeKey) || Number(props.defaultActiveKey),
      inkLineWidth: 0,
      inkLineOffsetLeft: 0,
    };
  }

  componentDidMount() {
    this.setInkLinePosition();
  }

  handleChild = (child, index) => {
    if (!child) {
      return null;
    }

    const { activeKey } = this.state;
    const key = child.key || String(index);
    const { tab, children, disabled } = child.props;
    const { prefixCls } = this.props;

    const isActive = activeKey === Number(key);

    const props = {
      key,
      tab,
      isActive,
      prefixCls,
      disabled,
      children,
    };

    return cloneElement(<TabPane>{child}</TabPane>, props);
  };

  getItem = () => {
    const { children } = this.props;
    const newChildren = Children.map(this.getChildren(), this.handleChild);

    if (isFragment(children)) {
      return <Fragment>{newChildren}</Fragment>;
    }

    return newChildren;
  };

  getHeader = () => {
    const { activeKey } = this.state;
    const headers = Children.map(this.getChildren(), (child, index) => {
      const key = child.key || String(index);
      const { tab, disabled } = child.props;
      const { prefixCls } = this.props;

      const isActive = activeKey === Number(key);

      const bindRef = isActive ? { ref: (node) => (this.activeTab = node) } : {};

      const props = {
        className: classNames(`${prefixCls}-header-item`, {
          [`${prefixCls}-header-item-active`]: isActive,
          [`${prefixCls}-header-item-disabled`]: disabled,
        }),
        key,
        onClick: disabled ? undefined : () => this.setActiveKey(key),
      };

      return cloneElement(<div {...bindRef}>{tab}</div>, props);
    });

    return headers;
  };

  getChildren = () => {
    const { children } = this.props;
    const realChildren = isFragment(children) ? children.props.children : children;
    return realChildren;
  };

  setActiveKey = (key) => {
    const { onChange, onTabClick } = this.props;
    const { activeKey } = this.state;

    onTabClick();

    if (activeKey === Number(key)) {
      return;
    }

    this.setState({ activeKey: Number(key) }, () => {
      this.setInkLinePosition();
      onChange(key);
    });
  };

  setInkLinePosition = () => {
    const { width, left } = (this.activeTab && this.activeTab.getBoundingClientRect()) || {};
    const { left: headerOffset } =
      (this.tabsHeader.current && this.tabsHeader.current.getBoundingClientRect()) || {};

    this.setState({
      inkLineWidth: width,
      inkLineOffsetLeft: left - headerOffset,
    });
  };

  render() {
    const { activeKey, inkLineWidth, inkLineOffsetLeft } = this.state;
    const { className, style, prefixCls, type, tabBarStyle, tabBarExtraContent } = this.props;

    const wrapperClassName = classNames(`${prefixCls}-wrapper`, className);
    const navClassName = classNames(`${prefixCls}-nav`, `${prefixCls}-nav-${type}`);

    return (
      <TabsWrapper style={style} prefixCls={prefixCls} className={wrapperClassName}>
        <TabsHeaderWrapper prefixCls={prefixCls} ref={this.tabsHeader} style={tabBarStyle}>
          <div className={navClassName}>
            {this.getHeader()}
            <div
              className={`${prefixCls}-ink-line`}
              style={{
                width: inkLineWidth,
                transform: `translate3d(${inkLineOffsetLeft}px, 0, 0)`,
              }}
            />
          </div>
          {tabBarExtraContent && <div style={{ float: "right" }}>{tabBarExtraContent}</div>}
        </TabsHeaderWrapper>
        <TabsPaneWrapper prefixCls={prefixCls} style={{ marginLeft: `-${(activeKey - 1) * 100}%` }}>
          {this.getItem()}
        </TabsPaneWrapper>
      </TabsWrapper>
    );
  }
}

Tabs.TabPane = TabPane;

export default Tabs;
