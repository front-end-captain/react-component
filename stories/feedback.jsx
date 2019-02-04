import React from "react";
import { storiesOf } from "@storybook/react";

import message from "../components/Message/index.js";
import ExampleCard from "./components/ExampleCard/index.jsx";
import BasicModal from "./components/BasicModalUsage/BasicModal.jsx";
import ConfirmModal from "./components/BasicModalUsage/ConfirmModal.jsx";
import Button from "./../components/Button/index.js";

import "./style/common.css";

storiesOf("反馈", module)
  .add("Modal", () => {
    return (
      <div className="modal-example example-wrapper">
        <div className="modal-example-header example-header">
          <h1>Modal</h1>
        </div>
        <div className="modal-example-demo demo-wrapper">
          <h3>示例</h3>
          <div className="demo-container">
            <div className="demo-container-left">
              <ExampleCard
                className="demo-item-container-basic"
                title="基本使用"
                description="最简单的用法。"
              >
                <BasicModal />
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="信息提示"
                description="各种类型的信息提示，只提供一个按钮用于关闭。"
              >
                <ConfirmModal />
              </ExampleCard>
            </div>
          </div>
        </div>
      </div>
    );
  })
  .add("Message", () => {
    const info = () => {
      message.info("This is a normal message");
    };
    const error = () => {
      message.error("This is a error message");
    };
    const success = () => {
      message.success("This is a success message");
    };
    const warning = () => {
      message.warn("This is a warning message");
    };
    const loading = () => {
      message.loading("This is a loading message");
    };
    const customDuration = () => {
      message.info("Customized display duration", 10);
    };

    return (
      <div className="modal-example example-wrapper">
        <div className="modal-example-header example-header">
          <h1>Message</h1>
        </div>
        <div className="modal-example-demo demo-wrapper">
          <h3>示例</h3>
          <div className="demo-container">
            <div className="demo-container-left">
              <ExampleCard
                className="demo-item-container-basic"
                title="基本使用"
                description="最简单的用法。"
              >
                <Button onClick={info} type="primary">
                  Display normal message
                </Button>
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="其他提示类型"
                description="包括成功、错误、警告、加载中。"
              >
                <Button onClick={success}>success</Button>
                <Button onClick={error}>error</Button>
                <Button onClick={warning}>warning</Button>
                <Button onClick={loading}>loading</Button>
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="修改延时"
                description="自定义时长 10s，默认时长为 3s。"
              >
                <Button onClick={customDuration}>Customized display duration</Button>
              </ExampleCard>
            </div>
          </div>
        </div>
      </div>
    );
  });
