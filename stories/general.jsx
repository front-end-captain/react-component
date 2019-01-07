import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../components/Button/index.js";
import ExampleCard from "./components/ExampleCard/index.jsx";

import "./style/general.css";

storiesOf("通用", module).add("Button", () => {
  return (
    <div className="button-example example-wrapper">
      <div className="button-example-header example-header">
        <h1>Button 按钮</h1>
      </div>
      <div className="button-example-demo demo-wrapper">
        <h3>代码演示</h3>
        <div className="demo-container">
          <div className="demo-container-right">
            <ExampleCard
              className="demo-item-container-basic"
              title="按钮类型"
              description="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。"
            >
              <Button>default</Button>
              <Button type="primary">default</Button>
              <Button type="danger">danger</Button>
              <Button type="dashed">dashed</Button>
            </ExampleCard>
          </div>
        </div>
      </div>
    </div>
  );
});
