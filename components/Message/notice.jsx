import React from "react";
import PropTypes from "prop-types";

import { Item, ItemContent } from "./message.css.js";

class MessageItem extends React.Component {
  static defaultProps = {
    duration: 3,
    onClose: () => {},
  };

  static propTypes = {
    duration: PropTypes.number,
    onClose: PropTypes.func,
    update: PropTypes.bool,
    icon: PropTypes.element,
  };

  componentDidMount() {
    this.startCloseTimer();
  }

  componentDidUpdate(prevProps) {
    const { duration, update } = this.props;
    if (duration !== prevProps.duration || update) {
      this.restartCloseTimer();
    }
  }

  close = () => {
    this.clearCloseTimer();
    const { onClose } = this.props;
    onClose();
  };

  startCloseTimer = () => {
    const { duration } = this.props;
    this.closeTimer = setTimeout(() => {
      this.close();
    }, duration * 1000);
  };

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  };

  restartCloseTimer() {
    this.clearCloseTimer();
    this.startCloseTimer();
  }

  render() {
    const { children, icon } = this.props;
    return (
      <Item className="sky-message-notice">
        <ItemContent className="sky-message-notice-content">
          {icon}
          {children}
        </ItemContent>
      </Item>
    );
  }
}

export default MessageItem;
