import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import MessageItem from "./notice.jsx";
import { InfoIcon, ErrorIcon, SuccessIcon, WarningIcon, LoadingIcon } from "./../Icon/index.jsx";

import { Wrapper } from "./message.css.js";

class Message extends React.Component {
  static createInstance = (options = {}) => {
    const mountNode = document.createElement("div");
    Message.defaultOptions.getContainer().appendChild(mountNode);

    let instance = null;

    const ref = function ref(messageComponent) {
      if (instance) {
        return;
      }

      instance = {
        add(noticeProps) {
          messageComponent.add(noticeProps);
        },
        destroy() {
          ReactDOM.unmountComponentAtNode(mountNode);
          mountNode.parentNode.removeChild(mountNode);
        },
      };
    };

    const props = { ...Message.defaultOptions, ...options };

    ReactDOM.render(<Message {...props} ref={ref} />, mountNode);

    return instance;
  };

  static defaultOptions = {
    top: 16,
    duration: 3,
    getContainer: () => document.body,
    maxCount: 10,
    prefixCls: "sky-message",
  };

  static defaultProps = {
    top: 16,
    duration: 3,
    getContainer: () => document.body,
    maxCount: 10,
    prefixCls: "sky-message",
  };

  static propTypes = {
    top: PropTypes.number,
    duration: PropTypes.number,
    getContainer: PropTypes.func,
    maxCount: PropTypes.number,
    prefixCls: PropTypes.string,
  };

  seed = 0;

  state = {
    messages: [],
  };

  remove = (key) => {
    this.setState((prevState) => {
      return {
        messages: prevState.messages.filter((message) => message.key !== key),
      };
    });
  };

  /**
   * @param {params}
   * {
   *   content: React.ReactNode | string,
   *   duration: number,
   *   onClose: () => {},
   *   icon: React.ReactNode
   * }
   */
  add = (params) => {
    const key = `message_${Date.now()}_${(this.seed += 1)}`;
    const { maxCount } = this.props;
    const message = { ...params, key };

    this.setState(({ messages }) => {
      const messageIndex = messages.findIndex((item) => item.key === key);
      const updatedMessages = Array.from(messages);

      if (messageIndex !== -1) {
        updatedMessages.splice(messageIndex, 1, message);
      } else {
        if (messages.length >= maxCount) {
          message.updateKey = updatedMessages[0].updateKey || updatedMessages[0].key;
          updatedMessages.shift();
        }
        updatedMessages.push(message);
      }

      return { messages: updatedMessages };
    });
  };

  render() {
    const { messages } = this.state;
    const { top, duration } = this.props;

    const messageItems = messages.map((message, index) => {
      const update = Boolean(index === messages.length - 1 && message.updateKey);
      const key = message.key || message.updateKey;
      const onClose = () => {
        this.remove(key);
        if (message.onClose) {
          message.onClose();
        }
      };

      return (
        <CSSTransition classNames="sky-message-fade" key={key} timeout={200}>
          <MessageItem
            key={key}
            update={update}
            onClose={onClose}
            duration={message.duration || duration}
            icon={message.icon}
          >
            {message.content}
          </MessageItem>
        </CSSTransition>
      );
    });

    return (
      <Wrapper className="sky-message" top={top}>
        <TransitionGroup component={null}>{messageItems}</TransitionGroup>
      </Wrapper>
    );
  }
}

let messageInstance = Message.createInstance();

const message = {
  info: (content, duration, onClose) => {
    messageInstance.add({
      content,
      duration,
      onClose,
      icon: <InfoIcon className="sky-message-icon sky-message-icon-info" />,
    });
  },

  error: (content, duration, onClose) => {
    messageInstance.add({
      content,
      duration,
      onClose,
      icon: <ErrorIcon className="sky-message-icon sky-message-icon-error" />,
    });
  },

  warn: (content, duration, onClose) => {
    messageInstance.add({
      content,
      duration,
      onClose,
      icon: <WarningIcon className="sky-message-icon sky-message-icon-warn" />,
    });
  },

  success: (content, duration, onClose) => {
    messageInstance.add({
      content,
      duration,
      onClose,
      icon: <SuccessIcon className="sky-message-icon sky-message-icon-success" />,
    });
  },

  loading: (content, duration, onClose) => {
    messageInstance.add({
      content,
      duration,
      onClose,
      icon: <LoadingIcon className="sky-message-icon sky-message-icon-loading" />,
    });
  },

  config: (options) => {
    messageInstance.destroy();
    messageInstance = Message.createInstance(options);
  },

  destroy: () => {
    messageInstance.destroy();
  },
};

export default message;
