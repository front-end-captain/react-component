import React from "react";
import { render, shallow } from "enzyme";

import Spin from "./../index.js";

describe("<Spin />", () => {
  it("should only affect the Spin element when set style to a nested <Spin>xxx</Spin>", () => {
    const wrapper = shallow(
      <Spin style={{ background: "red" }}>
        <div>content</div>
      </Spin>,
    );

    expect(
      wrapper
        .find(".sky-spin-nested-wrapper")
        .at(0)
        .prop("style"),
    ).toBeFalsy();

    expect(
      wrapper
        .find(".sky-spin-wrapper")
        .at(0)
        .prop("style").background,
    ).toBe("red");
  });

  it("should render custom indicator when it's set indicator", () => {
    const customIndicator = <div className="custom-indicator" />;
    const wrapper = render(<Spin indicator={customIndicator} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should be controlled by spinning", () => {
    const wrapper = shallow(<Spin spinning={false} />);
    expect(wrapper.find(".sky-spin-spinning").length === 1);

    wrapper.setProps({ spinning: true });
    expect(wrapper.find(".sky-spin-spinning").length === 0);
  });
});
