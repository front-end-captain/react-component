import React from "react";
import { storiesOf } from "@storybook/react";
import Tooltip from "../components/Tooltip/index.js";
import ExampleCard from "./components/ExampleCard/index.jsx";
import Button from "./../components/Button/index.js";

import "./style/common.css";

storiesOf("数据展示", module).add("Tooltip", () => {
  return (
    <div className="tooltip-example example-wrapper">
      <div className="tooltip-example-header example-header">
        <h1>Tooltip</h1>
      </div>
      <div className="tooltip-example-demo demo-wrapper">
        <h3>示例</h3>
        <div className="demo-container">
          <div className="demo-container-left">
            <ExampleCard
              className="demo-item-container-basic"
              title="基本使用"
              description="最简单的用法。"
            >
              <Tooltip title="prompt text" trigger="click">
                <span>Tooltip will show when mouse enter.</span>
              </Tooltip>
            </ExampleCard>
            <ExampleCard
              className="demo-item-container-basic"
              title="两种触发方式"
              description="两种触发方 `hover` 和 `click` 两种触发方式"
            >
              <Tooltip title="prompt text">
                <Button>hover</Button>
              </Tooltip>
              <Tooltip title="prompt text" trigger="click">
                <Button>click</Button>
              </Tooltip>
            </ExampleCard>
            <ExampleCard
              title="四个位置"
              description="可以设置四个位置 `top`, `bottom`, `left`, `right`"
            >
              <Tooltip title="prompt text" placement="top">
                <Button>top</Button>
              </Tooltip>
              &nbsp;&nbsp;
              <Tooltip title="prompt text" placement="bottom">
                <Button>bottom</Button>
              </Tooltip>
              &nbsp;&nbsp;
              <Tooltip title="prompt text" placement="left">
                <Button>left</Button>
              </Tooltip>
              &nbsp;&nbsp;
              <Tooltip title="prompt text" placement="right">
                <Button>right</Button>
              </Tooltip>
              &nbsp;&nbsp;
            </ExampleCard>
          </div>
        </div>
      </div>
    </div>
  );
});
