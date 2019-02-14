import React, { Component, createElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { DownIcon } from "./../Icon/index.jsx";

import PanelWrapper from "./collapsePanel.css.js";

class CollapsePanel extends Component {
  static defaultProps = {
    showArrow: true,
    isActive: false,
    // destroyInactivePanel: false,
    onItemHeaderClick: () => {},
    // forceRender: false,
  };

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    prefixCls: PropTypes.string,
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
    showArrow: PropTypes.bool,
    isActive: PropTypes.bool,
    onItemHeaderClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
    // destroyInactivePanel: PropTypes.bool,
    disabled: PropTypes.bool,
    accordion: PropTypes.bool,
    // forceRender: PropTypes.bool,
    expandIcon: PropTypes.func,
    panelKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  shouldComponentUpdate() {
    return true;
  }

  handleHeaderClick = () => {
    const { onItemHeaderClick, panelKey } = this.props;
    if (typeof onItemHeaderClick === "function") {
      onItemHeaderClick(panelKey);
    }
  };

  render() {
    const {
      className,
      id,
      style,
      prefixCls,
      header,
      children,
      isActive,
      showArrow,
      // destroyInactivePanel,
      disabled,
      accordion,
      // forceRender,
      expandIcon,
    } = this.props;

    const panelClassName = classNames(`${prefixCls}-panel`, className, {
      [`${prefixCls}-panel-active`]: isActive,
      [`${prefixCls}-panel-disabled`]: disabled,
    });
    const panelContentBoxClassName = classNames(`${prefixCls}-panel-content`, {
      [`${prefixCls}-panel-content-active`]: isActive,
      [`${prefixCls}-panel-content-inactive`]: !isActive,
    });

    let arrowIcon = null;
    if (showArrow && typeof expandIcon === "function") {
      arrowIcon = createElement(expandIcon, { ...this.props });
    }

    return (
      <PanelWrapper className={panelClassName} prefixCls={prefixCls} style={style} id={id}>
        <div className={`${prefixCls}-panel-header`} onClick={this.handleHeaderClick}>
          <span className={`${prefixCls}-panel-header-icon`}>
            {showArrow &&
              (arrowIcon || (
                <DownIcon
                  style={{ transform: `rotate(${isActive ? -90 : 0}deg)`, transition: "all 0.2s" }}
                />
              ))}
          </span>
          {header}
        </div>
        <div className={panelContentBoxClassName} role={accordion ? "tabpanel" : null}>
          {children}
        </div>
      </PanelWrapper>
    );
  }
}

export default CollapsePanel;
