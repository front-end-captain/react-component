import React from "react";
import assert from "power-assert";
import { render } from "enzyme";
import toJson from "enzyme-to-json";

import Progress from "./../index.js";

describe("<Progress />", () => {
  it("should be render some <Progress /> components", () => {
    const wrapper = render(
      <div>
        <Progress />
        <Progress type="dashboard" />
        <Progress type="circle" />
        <Progress status="success" percent={100} />
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find some class names", () => {
    const wrapper = render(
      <div>
        <Progress />
        <Progress type="dashboard" />
        <Progress type="circle" />
        <Progress status="success" percent={100} />
        <Progress status="exception" percent={45} />
      </div>,
    );

    assert(wrapper.find(".sky-progress-line-wrapper").length === 3);
    assert(wrapper.find(".sky-progress-circle-wrapper").length === 2);
    assert(wrapper.find(".sky-progress-line-success").length === 1);
    assert(wrapper.find(".sky-progress-line-normal").length === 1);
    assert(wrapper.find(".sky-progress-circle-normal").length === 2);
    assert(wrapper.find(".sky-progress-line-exception").length === 1);
  });
});
