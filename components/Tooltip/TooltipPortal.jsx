import React from "react";
import { createPortal } from "react-dom";

// props
// getPopupContainer: () => void;
// onChange: () => void;

class TooltipPortal extends React.Component {
  static defaultProps = {
    getPopupContainer: () => document.body,
  };

  constructor(props) {
    super(props);

    this.wrapperNode = document.createElement("div");
    this.wrapperContainer = props.getPopupContainer();
  }

  componentDidMount() {
    const { onChange } = this.props;
    this.wrapperContainer.appendChild(this.wrapperNode);
    this.forceUpdate();
    if (onChange) {
      onChange();
    }
  }

  componentWillUnmount() {
    this.wrapperContainer.removeChild(this.wrapperNode);
  }

  render() {
    const { children } = this.props;
    return createPortal(children, this.wrapperNode);
  }
}

export default TooltipPortal;
