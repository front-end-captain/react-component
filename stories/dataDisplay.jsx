import React from "react";
import { storiesOf } from "@storybook/react";

import Tooltip from "../components/Tooltip/index.js";
import Button from "./../components/Button/index.js";
import Badge from "./../components/Badge/index.js";
import { InfoIcon, MessageIcon } from "./../components/Icon/index.jsx";

import ExampleCard from "./components/ExampleCard/index.jsx";
import DynamicBadge from "./components/BadgeUsage/dynamicBadge.jsx";

import "./style/common.css";
import "./style/dataDisplay.css";

storiesOf("数据展示", module)
  .add("Tooltip", () => {
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
  })
  .add("Badge", () => {
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
                description="简单的徽章展示，当 `count` 为 0 时，默认不显示，但是可以使用 `showZero` 修改为显示。"
              >
                <Badge count={9} wrapStyle={{ marginRight: "20px" }}>
                  <a href="#" className="badge-example">
                    {}
                  </a>
                </Badge>
                <Badge count={0} showZero wrapStyle={{ marginRight: "20px" }}>
                  <a href="#" className="badge-example">
                    {}
                  </a>
                </Badge>
                <Badge count={<InfoIcon style={{ fontSize: "18px", color: "red" }} />}>
                  <a href="#" className="badge-example">
                    {}
                  </a>
                </Badge>
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="独立使用"
                description="不包裹任何元素即是独立使用，可自定样式展现。"
              >
                <Badge count={25} wrapStyle={{ marginRight: "20px" }} />
                <Badge
                  count={5}
                  showZero
                  wrapStyle={{ marginRight: "20px" }}
                  style={{
                    backgroundColor: "#fff",
                    color: "#999",
                    boxShadow: "0 0 0 1px #d9d9d9 inset",
                  }}
                />
                <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="状态点"
                description="用于表示状态的小圆点。"
              >
                <Badge status="default" wrapStyle={{ marginRight: "10px" }} />
                <Badge status="error" wrapStyle={{ marginRight: "10px" }} />
                <Badge status="warn" wrapStyle={{ marginRight: "10px" }} />
                <Badge status="success" wrapStyle={{ marginRight: "10px" }} />
                <Badge status="info" wrapStyle={{ marginRight: "10px" }} />
                <br />
                <Badge status="default" text="default" />
                <br />
                <Badge status="error" text="error" />
                <br />
                <Badge status="warn" text="warning" />
                <br />
                <Badge status="success" text="success" />
                <br />
                <Badge status="info" text="information" />
              </ExampleCard>
            </div>
            <div className="demo-container-right">
              <ExampleCard
                className="demo-item-container-basic"
                title="封顶数字"
                description="超过 `overCount` 会默认显示为 `overCount+`, 默认 `overCount` 为 99。"
              >
                <Badge count={109} wrapStyle={{ marginRight: "30px" }}>
                  <a href="#" className="badge-example">
                    {}
                  </a>
                </Badge>
                <Badge count={1009} overCount={999} wrapStyle={{ marginRight: "30px" }}>
                  <a href="#" className="badge-example">
                    {}
                  </a>
                </Badge>
                <Badge count={1009} overCount={10} wrapStyle={{ marginRight: "30px" }}>
                  <a href="#" className="badge-example">
                    {}
                  </a>
                </Badge>
                <Badge count={888} overCount={999} wrapStyle={{ marginRight: "30px" }}>
                  <a href="#" className="badge-example">
                    {}
                  </a>
                </Badge>
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="讨嫌的红点"
                description="没有具体的数字。"
              >
                <Badge dot wrapStyle={{ marginRight: "30px" }}>
                  <a href="#">Link something</a>
                </Badge>
                <Badge wrapStyle={{ marginRight: "30px" }}>
                  <MessageIcon style={{ fontSize: "18px", color: "#555" }} />
                </Badge>
                <Badge dot wrapStyle={{ marginRight: "30px" }}>
                  <MessageIcon style={{ fontSize: "18px", color: "#555" }} />
                </Badge>
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="动态"
                description="展示动态变化的效果。"
              >
                <DynamicBadge />
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="偏移量"
                description="可以设置 offset[right, top] 来设置徽标的偏移量。"
              >
                <Badge count={10} offset={[10, 0]} wrapStyle={{ marginRight: "20px" }}>
                  <a href="#" className="badge-example">
                    {}
                  </a>
                </Badge>
                <Badge dot offset={[40, 0]}>
                  <a href="#" className="badge-example">
                    {}
                  </a>
                </Badge>
              </ExampleCard>
            </div>
          </div>
        </div>
      </div>
    );
  });
