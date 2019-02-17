import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";

import Timeline from "./../index.js";

import { InfoIcon } from "./../../Icon/index.jsx";

const { Item } = Timeline;

describe("Timeline", () => {
  it("should render some Timeline components", () => {
    const wrapper = render(
      <div>
        <Timeline>
          <Item>Create a services site 2015-09-01</Item>
          <Item>Solve initial network problems 2015-09-01</Item>
          <Item>Technical testing 2015-09-01</Item>
          <Item>Network problems being solved 2015-09-01</Item>
        </Timeline>
        <Timeline pending="Recording...">
          <Item>Create a services site 2015-09-01</Item>
          <Item>Solve initial network problems 2015-09-01</Item>
          <Item>Technical testing 2015-09-01</Item>
        </Timeline>
        <Timeline mode="alternate">
          <Item>Create a services site 2015-09-01</Item>
          <Item color="green">Solve initial network problems 2015-09-01</Item>
          <Item dot={<InfoIcon style={{ color: "red", fontSize: "18px" }} />}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </Item>
          <Item color="red">Network problems being solved 2015-09-01</Item>
          <Item>Create a services site 2015-09-01</Item>
          <Item dot={<InfoIcon style={{ color: "red", fontSize: "18px" }} />}>
            Technical testing 2015-09-01
          </Item>
        </Timeline>
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
