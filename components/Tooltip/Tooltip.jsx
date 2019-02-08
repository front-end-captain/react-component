import React, { createRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import scrollIntoViewIfNeeded from "scroll-into-view-if-needed";

import TooltipPortal from "./TooltipPortal.jsx";

import { OverlayContent, TooltipWrapper, TriggerWrapper } from "./Tooltip.css.js";

class Tooltip extends React.Component {
  static defaultProps = {
    prefixCls: "sky-tooltip",
    placement: "top",
    onVisibleChange: () => {},
    trigger: "hover",
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    placement: PropTypes.oneOf(["top", "right", "left", "bottom"]),
    onVisibleChange: PropTypes.func,
    trigger: PropTypes.oneOf(["hover", "click"]),
  };

  static triggerTypes = { hover: "hover", click: "click" };

  OPEN_LOCK = false;

  CLOSE_LOCK = false;

  constructor(props) {
    super(props);

    this.state = {
      visible: null,
      left: 0,
      top: 0,
    };

    this.overlayContent = createRef();
    this.trigger = createRef();
    this.wrapper = createRef();

    this.onCloseTooltip = this.onCloseTooltip.bind(this);
    this.onOpenTooltip = this.onOpenTooltip.bind(this);
    this.getWrapperBounding = this.getWrapperBounding.bind(this);
    this.setWrapperBounding = this.setWrapperBounding.bind(this);
    this.resetWrapperPosition = this.resetWrapperPosition.bind(this);
    this.onClickOutSideHandle = this.onClickOutSideHandle.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.onClickOutSideHandle);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        visible: nextProps.visible,
      },
      () => {
        this.OPEN_LOCK = !nextProps.visible;
        this.CLOSE_LOCK = !nextProps.visible;
      },
    );
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onClickOutSideHandle);
  }

  onClickOutSideHandle(event) {
    event.stopPropagation();

    const { visible } = this.state;
    const { onVisibleChange } = this.props;

    if (
      visible &&
      !this.wrapper.current.contains(event.target) &&
      !this.overlayContent.current.contains(event.target)
    ) {
      this.setState({ visible: false }, () => {
        this.OPEN_LOCK = false;
        this.CLOSE_LOCK = true;
        onVisibleChange(false);
      });
    }
  }

  onOpenTooltip() {
    const { onVisibleChange } = this.props;
    this.CLOSE_LOCK = false;
    this.setState({ visible: true }, () => {
      if (!this.OPEN_LOCK) {
        this.setWrapperBounding(() => {
          onVisibleChange(true);
          this.OPEN_LOCK = true;
          this.CLOSE_LOCK = false;
          scrollIntoViewIfNeeded(this.overlayContent.current, {
            scrollMode: "if-needed",
            behavior: "smooth",
            block: "nearest",
            inline: "nearest",
          });
        });
      }
    });
  }

  onCloseTooltip() {
    const { onVisibleChange } = this.props;
    this.setState({ visible: false }, () => {
      this.setWrapperBounding(() => {
        onVisibleChange(false);
        this.OPEN_LOCK = false;
        this.CLOSE_LOCK = true;
      });
    });
  }

  getWrapperBounding() {
    const { scrollX, scrollY } = window;
    const { width, height, top, left } = this.trigger.current.getBoundingClientRect();
    const {
      height: wrapperHeight,
      width: wrapperWidth,
    } = this.overlayContent.current.getBoundingClientRect();

    const { placement } = this.props;

    const positions = {
      top: {
        top: top + scrollY - wrapperHeight,
        left: left + scrollX + width / 2 - wrapperWidth / 2,
      },
      bottom: {
        top: top + height + scrollY,
        left: left + scrollX + width / 2 - wrapperWidth / 2,
      },
      left: {
        top: top + scrollY + height / 2 - wrapperHeight / 2,
        left: left + scrollX - wrapperWidth,
      },
      right: {
        top: top + scrollY + height / 2 - wrapperHeight / 2,
        left: left + scrollX + width,
      },
    };

    return positions[placement];
  }

  setWrapperBounding(cb = () => {}) {
    const { left, top } = this.getWrapperBounding();
    this.setState({ left, top }, cb);
  }

  resetWrapperPosition() {
    const { visible } = this.state;
    if (visible) {
      setTimeout(() => {
        this.setWrapperBounding();
      }, 0);
    }
  }

  render() {
    const { left, top, visible } = this.state;
    const {
      children,
      title,
      prefixCls,
      className,
      placement,
      getPopupContainer,
      overlayClassName,
      trigger,
    } = this.props;

    const contentClassNames = classNames(
      overlayClassName,
      `${prefixCls}-overlay`,
      `${prefixCls}-position-${placement}`,
      {
        [`${prefixCls}-hide`]: !visible,
        [`${prefixCls}-show`]: visible,
        [`${prefixCls}-not-display`]: this.trigger.current === null,
      },
    );

    const isHover = trigger === Tooltip.triggerTypes.hover;

    const triggerEvents = isHover
      ? { onMouseEnter: this.onOpenTooltip, onMouseLeave: this.onCloseTooltip }
      : { onClick: this.onOpenTooltip };

    return (
      <TooltipWrapper
        className={classNames(prefixCls, className)}
        ref={this.wrapper}
        {...triggerEvents}
      >
        <TooltipPortal onChange={this.resetWrapperPosition} getPopupContainer={getPopupContainer}>
          <OverlayContent
            ref={this.overlayContent}
            className={contentClassNames}
            style={{ left, top }}
            prefixCls={prefixCls}
          >
            {title}
          </OverlayContent>
        </TooltipPortal>

        <TriggerWrapper ref={this.trigger}>{children}</TriggerWrapper>
      </TooltipWrapper>
    );
  }
}

export default Tooltip;
