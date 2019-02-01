import React from "react";

import Modal from "../../../components/Modal/index.js";
import Button from "../../../components/Button/index.js";

class BasicModal extends React.Component {
  state = {
    visible: false,
  };

  onShow = () => {
    this.setState({ visible: true });
  };

  onHide = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Button onClick={this.onShow}>open modal</Button>
        <Modal
          visible={visible}
          title="basic modal"
          onOk={this.onHide}
          onCancel={this.onHide}
          centered
          okButtonProps={{ disabled: true }}
        >
          <p>some contents ...</p>
          <p>some contents ...</p>
          <p>some contents ...</p>
        </Modal>
      </div>
    );
  }
}

export default BasicModal;
