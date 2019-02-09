import React from "react";
import { storiesOf } from "@storybook/react";

import ExampleCard from "./components/ExampleCard/index.jsx";
import BasicModal from "./components/BasicModalUsage/BasicModal.jsx";
import ConfirmModal from "./components/BasicModalUsage/ConfirmModal.jsx";

import DynamicLineProgress from "./components/ProgressUsage/dynamicLineProgress.jsx";
import DynamicCircleProgress from "./components/ProgressUsage/dynamicCircleProgress.jsx";
import ToggleSpin from "./components/SpinUsage/toggleSpin.jsx";

import Button from "./../components/Button/index.js";
import Progress from "./../components/Progress/index.js";
import message from "../components/Message/index.js";
import Spin from "./../components/Spin/index.js";

import { CircleLoadingIcon } from "./../components/Icon/index.jsx";

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
  })
  .add("Progress", () => {
    return (
      <div className="modal-example example-wrapper">
        <div className="modal-example-header example-header">
          <h1>Progress</h1>
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
                <Progress percent={30} wrapStyle={{ marginBottom: "15px" }} />
                <Progress percent={50} status="exception" wrapStyle={{ marginBottom: "15px" }} />
                <Progress percent={100} status="success" wrapStyle={{ marginBottom: "15px" }} />
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="动态展示"
                description="会动的进度条才是好进度条。"
              >
                <DynamicLineProgress />
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="自定义内容模板"
                description="使用 `format` 函数来自定义内容提示信息"
              >
                <Progress
                  percent={30}
                  format={(percent) => `${percent} Days`}
                  wrapStyle={{ marginBottom: "15px" }}
                />
                <Progress type="circle" percent={100} format={() => "Done"} />
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="圆角/方角边缘"
                description="通过设定 `linecap='square|round'` 可以调整进度条边缘的形状。"
              >
                <Progress
                  type="circle"
                  percent={75}
                  linecap="square"
                  format={(percent) => `${percent} Days`}
                  wrapStyle={{ marginRight: "15px" }}
                />
                <Progress type="dashboard" percent={40} linecap="square" />
                <Progress percent={55} linecap="square" format={(percent) => `${percent}% Done`} />
              </ExampleCard>
            </div>
            <div className="demo-container-right">
              <ExampleCard
                className="demo-item-container-basic"
                title="进度圈"
                description="圆形的进度。"
              >
                <Progress type="circle" percent={30} wrapStyle={{ marginRight: "15px" }} />
                <Progress
                  type="circle"
                  percent={50}
                  status="exception"
                  wrapStyle={{ marginRight: "15px" }}
                />
                <Progress
                  type="circle"
                  percent={100}
                  status="success"
                  wrapStyle={{ marginRight: "15px" }}
                />
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="动态进度圈"
                description="会动的进度条才是好进度条。"
              >
                <DynamicCircleProgress />
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="仪表盘"
                description="通过设置 `type=dashboard`, 可以很方便地实现仪表盘样式的进度条。"
              >
                <Progress type="dashboard" percent={75} />
              </ExampleCard>
            </div>
          </div>
        </div>
      </div>
    );
  })
  .add("Spin", () => {
    const loadingIcon = <CircleLoadingIcon />;
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
                description="一个简单的 loading 状态。"
              >
                <Spin />
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="三种大小"
                description="小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。"
              >
                <Spin size="small" style={{ marginRight: "10px" }} />
                <Spin style={{ marginRight: "10px" }} />
                <Spin size="large" />
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="自定义加载器"
                description="使用自定义指示符。"
              >
                <Spin tip="加载中..." indicator={loadingIcon} />
              </ExampleCard>
            </div>
            <div className="demo-container-right">
              <ExampleCard
                className="demo-item-container-basic"
                title="放到一个容器中"
                description="在一个容器中使用 Spin"
              >
                <Spin>
                  <div
                    style={{
                      padding: "30px 10px",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                      backgroundColor: "#e6f7ff",
                    }}
                  >
                    some content
                  </div>
                </Spin>
              </ExampleCard>
              <ExampleCard
                className="demo-item-container-basic"
                title="放到一个容器中"
                description="在一个容器中使用 Spin"
              >
                <ToggleSpin />
              </ExampleCard>
            </div>
          </div>
        </div>
      </div>
    );
  });
