import React from "react";
import { storiesOf } from "@storybook/react";

import ExampleCard from "./components/ExampleCard/index.jsx";
import BasicModal from "./components/BasicModalUsage/BasicModal.jsx";
import ConfirmModal from "./components/BasicModalUsage/ConfirmModal.jsx";

import "./style/common.css";

storiesOf("反馈", module).add("Modal", () => {
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
});
