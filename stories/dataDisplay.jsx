import React from "react";
import { storiesOf } from "@storybook/react";
import Tooltip from "../components/Tooltip/index.js";
import ExampleCard from "./components/ExampleCard/index.jsx";

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
              <Tooltip title="prompt text">
                <span>Tooltip will show when mouse enter.</span>
              </Tooltip>
            </ExampleCard>
          </div>
        </div>
      </div>
    </div>
  );
});
