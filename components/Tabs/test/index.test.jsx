import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";

import Tabs from "./../index.js";

const { TabPane } = Tabs;

describe("<Tab />", () => {
  it("should render some Tabs components", () => {
    const wrapper = render(
      <div>
        <Tabs
          defaultActiveKey="1"
          onChange={(key) => console.log(key)}
          onTabClick={() => console.log("tab clicked")}
        >
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <Tabs defaultActiveKey="2" type="card">
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
