import React from "react";

import Button from "./../../../components/Button/index.js";
import Modal from "./../../../components/Modal/index.js";

const ConfirmModal = () => {
  function info() {
    Modal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      maskClosable: true,
      onOk() {},
    });
  }

  function success() {
    Modal.success({
      title: "This is a success message",
      content: "some messages...some messages...",
    });
  }

  function error() {
    Modal.error({
      title: "This is an error message",
      content: "some messages...some messages...",
    });
  }

  function warning() {
    const warningModal = Modal.warning({
      title: "This is a warning message",
      content: "The content will change after 2 seconds",
    });

    setTimeout(() => {
      warningModal.update({ content: "content updated" });
    }, 2000);
  }

  return (
    <>
      <Button onClick={info} type="primary">
        info
      </Button>
      <Button onClick={success}>success</Button>
      <Button onClick={error}>error</Button>
      <Button onClick={warning}>warn</Button>
    </>
  );
};

export default ConfirmModal;
