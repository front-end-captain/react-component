import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";

import Collapse from "./../index.js";

const { Panel } = Collapse;

describe("Panel", () => {
  it("should render some Collapse components", () => {
    const wrpaper = render(
      <div>
        <Collapse>
          <Panel header="title" key="1">
            some text
          </Panel>
          <Panel header="title" key="2">
            some text
          </Panel>
          <Panel header="title" key="3">
            some text
          </Panel>
        </Collapse>
        <Collapse accordion>
          <Panel header="title" key="1">
            some text
          </Panel>
          <Panel header="title" key="2">
            some text
          </Panel>
          <Panel header="title" key="3">
            some text
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header="This is panel header 1" key="1">
            <Collapse defaultActiveKey={["1"]}>
              <Panel header="This is panel nest panel" key="1">
                some text
              </Panel>
            </Collapse>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            some text
          </Panel>
          <Panel header="This is panel header 3" key="3">
            some text
          </Panel>
        </Collapse>
      </div>,
    );

    expect(toJson(wrpaper)).toMatchSnapshot();
  });
});
