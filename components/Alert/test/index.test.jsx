import React from "react";
import toJson from "enzyme-to-json";
import { render, shallow } from "enzyme";

import Alert from "./../index.js";

describe("Alert", () => {
  it("should be render some Alert components", () => {
    const wrapper = render(
      <div>
        <Alert content="some content" />
        <Alert title="Title" content="some content" type="warn" />
        <Alert closable content="some content" type="error" />
        <Alert showIcon content="some content" type="success" />
        <Alert showIcon closable title="This is title" content="some content" />
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should invoke external callback correctly", () => {
    const onClose = jest.fn();
    const afterClose = jest.fn();

    const wrapper = shallow(
      <Alert onClose={onClose} afterClose={afterClose} closable content="some content" />,
    );

    wrapper.find(".sky-alert-close-icon > span").simulate("click");

    expect(onClose).toHaveBeenCalled();
    setTimeout(() => {
      expect(afterClose).toHaveBeenCalled();
    }, 500);
  });

  it("should render custom icon when it's set icon", () => {
    const customIcon = <div className="custom-indicator" />;
    const wrapper = render(<Alert icon={customIcon} />);
    expect(wrapper).toMatchSnapshot();
  });
});
