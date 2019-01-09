import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../components/Button/index.js";
import ExampleCard from "./components/ExampleCard/index.jsx";

import "./style/common.css";
import "./style/general.css";

storiesOf("通用", module).add("Button", () => {
  return (
    <div className="button-example example-wrapper">
      <div className="button-example-header example-header">
        <h1>Button 按钮</h1>
      </div>
      <div className="button-example-demo demo-wrapper">
        <h3>示例</h3>
        <div className="demo-container">
          <div className="demo-container-left">
            <ExampleCard
              className="demo-item-container-basic"
              title="按钮类型"
              description="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。"
            >
              <Button>Hello Sky</Button>
              <Button type="primary">default</Button>
              <Button type="danger">danger</Button>
              <Button type="dashed">dashed</Button>
            </ExampleCard>
            <ExampleCard
              className="demo-item-container-basic"
              title="按钮大小"
              description="按钮有大、中、小三种尺寸。"
            >
              <Button size="large" type="primary">
                large
              </Button>
              <Button size="default" disabled>
                default
              </Button>
              <Button size="small" type="dashed">
                small
              </Button>
            </ExampleCard>
            <ExampleCard
              className="demo-item-container-basic"
              title="加载中状态"
              description="添加 `loading` 属性可以让按钮处于加载中状态。"
            >
              <Button size="large" type="primary" loading>
                large
              </Button>
              <Button size="default" loading>
                default
              </Button>
              <Button size="small" type="dashed" loading>
                small
              </Button>
            </ExampleCard>
          </div>
          <div className="demo-container-right">
            <ExampleCard
              className="demo-item-container-basic"
              title="block 按钮"
              description="`block` 属性将使按钮适合其父宽度"
            >
              <Button size="large" type="primary" loading block>
                large
              </Button>
              <Button size="default" block type="danger">
                default
              </Button>
              <Button size="small" type="dashed" loading block>
                small
              </Button>
            </ExampleCard>
          </div>
        </div>
      </div>
    </div>
  );
});
