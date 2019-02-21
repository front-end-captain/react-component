import React from "react";
import { storiesOf } from "@storybook/react";

import Tooltip from "../components/Tooltip/index.js";
import Button from "./../components/Button/index.js";
import Badge from "./../components/Badge/index.js";
import { InfoIcon, MessageIcon, DownIconFill } from "./../components/Icon/index.jsx";
import Collapse from "./../components/Collapse/index.js";
import Timeline from "./../components/Timeline/index.js";
import Calendar from "./../components/Calendar/index.js";

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
      <div className="badge-example example-wrapper">
        <div className="badge-example-header example-header">
          <h1>Badge</h1>
        </div>
        <div className="badge-example-demo demo-wrapper">
          <h3>示例</h3>
          <div className="demo-container">
            <div className="demo-container-left">
              <ExampleCard
                className="demo-item-container-basic"
                title="基本使用"
                description="简单的徽章展示，当 `count` 为 0 时，默认不显示，但是可以使用 `showZero` 修改为显示。"
              >
                <Badge count={9} wrapStyle={{ marginRight: "20px" }}>
                  <a href="#" className="badge-example-placeholder">
                    {}
                  </a>
                </Badge>
                <Badge count={0} showZero wrapStyle={{ marginRight: "20px" }}>
                  <a href="#" className="badge-example-placeholder">
                    {}
                  </a>
                </Badge>
                <Badge count={<InfoIcon style={{ fontSize: "18px", color: "red" }} />}>
                  <a href="#" className="badge-example-placeholder">
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
                  <a href="#" className="badge-example-placeholder">
                    {}
                  </a>
                </Badge>
                <Badge count={1009} overCount={999} wrapStyle={{ marginRight: "30px" }}>
                  <a href="#" className="badge-example-placeholder">
                    {}
                  </a>
                </Badge>
                <Badge count={1009} overCount={10} wrapStyle={{ marginRight: "30px" }}>
                  <a href="#" className="badge-example-placeholder">
                    {}
                  </a>
                </Badge>
                <Badge count={888} overCount={999} wrapStyle={{ marginRight: "30px" }}>
                  <a href="#" className="badge-example-placeholder">
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
                  <a href="#" className="badge-example-placeholder">
                    {}
                  </a>
                </Badge>
                <Badge dot offset={[40, 0]}>
                  <a href="#" className="badge-example-placeholder">
                    {}
                  </a>
                </Badge>
              </ExampleCard>
            </div>
          </div>
        </div>
      </div>
    );
  })
  .add("Collapse", () => {
    const { Panel } = Collapse;
    const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.`;
    const callback = (key) => console.log(key);
    const customPanelStyle = {
      background: "#f7f7f7",
      borderRadius: "4px",
      marginBottom: "24px",
      border: "0",
      overflow: "hidden",
    };

    return (
      <div className="collapse-example example-wrapper">
        <div className="collapse-example-header example-header">
          <h1>Tooltip</h1>
        </div>
        <div className="collapse-example-demo demo-wrapper">
          <h3>示例</h3>
          <div className="demo-container">
            <ExampleCard
              className="demo-item-container-basic"
              title="基本使用"
              description="最简单的用法。"
            >
              <Collapse defaultActiveKey={["1"]} onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3" disabled>
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </ExampleCard>
            <ExampleCard
              className="demo-item-container-basic"
              title="手风琴"
              description="手风琴，每次只打开一个 collapse。默认打开第一个。"
            >
              <Collapse accordion>
                <Panel header="This is panel header 1" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </ExampleCard>
            <ExampleCard title="嵌套面板" description="嵌套折叠面板。">
              <Collapse onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                  <Collapse defaultActiveKey={["1"]}>
                    <Panel header="This is panel nest panel" key="1">
                      <p>{text}</p>
                    </Panel>
                  </Collapse>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </ExampleCard>
            <ExampleCard
              title="隐藏箭头"
              description="你可以通过 showArrow={false} 隐藏 CollapsePanel 组件的箭头图标。"
            >
              <Collapse defaultActiveKey={["1"]} onChange={callback}>
                <Panel header="This is panel header with arrow icon" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel showArrow={false} header="This is panel header with no arrow icon" key="2">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </ExampleCard>
            <ExampleCard
              className="demo-item-container-basic"
              title="简洁面板"
              description="最简单的用法。"
            >
              <Collapse defaultActiveKey={["1"]} bordered={false} onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </ExampleCard>
            <ExampleCard
              className="demo-item-container-basic"
              title="自定义面板"
              description="自定义各个面板的背景色、圆角、边距和图标。"
            >
              <Collapse
                bordered={false}
                defaultActiveKey={["1"]}
                expandIcon={({ isActive }) => (
                  <DownIconFill
                    style={{
                      transform: `rotate(${isActive ? -90 : 0}deg)`,
                      transition: "all 0.2s",
                    }}
                  />
                )}
              >
                <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </ExampleCard>
          </div>
        </div>
      </div>
    );
  })
  .add("Timeline", () => {
    return (
      <div className="timeline-example example-wrapper">
        <div className="timeline-example-header example-header">
          <h1>Timeline</h1>
        </div>
        <div className="timeline-example-demo demo-wrapper">
          <h3>示例</h3>
          <div className="demo-container">
            <div className="demo-container-left">
              <ExampleCard
                className="demo-item-container-basic"
                title="基本使用"
                description="基本的时间轴。"
              >
                <Timeline>
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                  <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="圈圈颜色"
                description="圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态。"
              >
                <Timeline>
                  <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item color="red">
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                  </Timeline.Item>
                  <Timeline.Item>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                  </Timeline.Item>
                </Timeline>
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="最后一个"
                description="当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点，
                当 pending 为真值时展示幽灵节点，如果 pending 是 React 元素可用于定制该节点内容，
                同时 pendingDot 将可以用于定制其轴点。"
              >
                <Timeline pending="Recording...">
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                </Timeline>
              </ExampleCard>
            </div>
            <div className="demo-container-right">
              <ExampleCard
                className="demo-item-container-basic"
                title="自定义时间轴点图标"
                description="可以设置为图标或其他自定义元素。"
              >
                <Timeline>
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item dot={<InfoIcon style={{ color: "red", fontSize: "18px" }} />}>
                    Technical testing 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="交替展现"
                description="内容在时间轴两侧轮流出现。"
              >
                <Timeline mode="alternate">
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item color="green">
                    Solve initial network problems 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item dot={<InfoIcon style={{ color: "red", fontSize: "18px" }} />}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </Timeline.Item>
                  <Timeline.Item color="red">
                    Network problems being solved 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item dot={<InfoIcon style={{ color: "red", fontSize: "18px" }} />}>
                    Technical testing 2015-09-01
                  </Timeline.Item>
                </Timeline>
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="右侧时间轴"
                description="时间轴点可以在内容的右边。"
              >
                <Timeline mode="right">
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item
                    dot={<InfoIcon style={{ color: "red", fontSize: "18px" }} />}
                    color="red"
                  >
                    Technical testing 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
              </ExampleCard>
            </div>
          </div>
        </div>
      </div>
    );
  })
  .add("Calendar", () => {
    return (
      <div className="tooltip-example example-wrapper">
        <div className="tooltip-example-header example-header">
          <h1>Tooltip</h1>
        </div>
        <div className="tooltip-example-demo demo-wrapper">
          <h3>示例</h3>
          <div className="demo-container">
            <ExampleCard title="基本" description="一个通用的日历面板，支持年/月切换。">
              <Calendar
                onSelect={(value) => console.log(value.toLocaleString())}
                dateCellRender={(date) => (date.getDate() === 21 ? "custom content" : "")}
                disabledDate={(date) => date.getDate() === 12}
              />
            </ExampleCard>
            <ExampleCard title="卡片模式" description="用于嵌套在空间有限的容器中。">
              <div style={{ width: 300, border: "1px solid #d9d9d9", borderRadius: 4 }}>
                <Calendar
                  fullscreen={false}
                  onSelect={(value) => console.log(value.toLocaleString())}
                  onPanelChange={(value) => console.log(value.toLocaleString())}
                  disabledDate={(date) => date.getDate() === 10}
                />
              </div>
            </ExampleCard>
          </div>
        </div>
      </div>
    );
  });
