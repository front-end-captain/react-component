import React from "react";
import { storiesOf } from "@storybook/react";

import ExampleCard from "./components/ExampleCard/index.jsx";

import Pagination from "./../components/Pagination/index.js";

storiesOf("导航", module).add("Pagination", () => {
  const renderTotal = (total, range) => {
    console.log(range);
    return `${range[0]}-${range[1]} of ${total} items`;
  };

  return (
    <div className="modal-example example-wrapper">
      <div className="modal-example-header example-header">
        <h1>Pagination</h1>
      </div>
      <div className="modal-example-demo demo-wrapper">
        <h3>示例</h3>
        <div className="demo-container">
          <ExampleCard title="基本" description="基础分页。">
            <Pagination total={90} />
          </ExampleCard>
          <ExampleCard title="更多" description="更多分页。">
            <Pagination total={5000} defaultPageSize={5} defaultCurrent={7} />
          </ExampleCard>
          <ExampleCard title="总数" description="通过设置 `showTotal` 展示总共有多少数据。">
            <Pagination total={400} showTotal={renderTotal} />
          </ExampleCard>
          <ExampleCard title="跳转" description="快速跳转到某一页。">
            <Pagination total={1000} defaultPageSize={5} showQuickJumper />
          </ExampleCard>
        </div>
      </div>
    </div>
  );
});
