import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";

import Badge from "./../index.js";

describe("Badge", () => {
  it("should be render some Badge components", () => {
    const wrapper = render(
      <div>
        <Badge />
        <Badge count={88} />
        <Badge dot />
        <Badge status="info" />
        <Badge status="info" text="information" />
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render custom icon when set count for a ReactNode", () => {
    const customIcon = <div className="custom-icon">icon</div>;
    const wrapper = render(<Badge count={customIcon} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render correct position when set offset", () => {
    const wrapper = render(<Badge dot offset={[40, 10]} />);

    expect(toJson(wrapper)).toMatchSnapshot();

    // expect(wrapper.find(".sky-badge-container").css("right")).toBe(40);
    // expect(wrapper.find(".sky-badge-container").css("top")).toBe(10);
  });
});
