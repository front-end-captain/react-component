import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "../index";
import { CircleLoadingIcon } from "./../../Icon/index.jsx";

describe("<Button/>", () => {
  it("should render a <Button/> components", () => {
    const wrapper = render(
      <div>
        <Button>Hello Sky</Button>
        <Button type="primary">Primary</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button disabled>Disabled</Button>
        <Button loading>loading</Button>
        <Button block>Block</Button>
        <Button type="primary" size="large">
          Large
        </Button>
        <Button type="primary">Default</Button>
        <Button type="danger" size="small">
          Small
        </Button>
      </div>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find sky-button classnames", () => {
    const wrapper = render(
      <div>
        <Button>你好</Button>
        <Button type="primary">Primary</Button>
        <Button type="default">Default</Button>
        <Button type="danger">Danger</Button>
        <Button type="dashed">Dashed</Button>
        <Button disabled>Disabled</Button>
        <Button loading>loading</Button>
        <Button block>Block</Button>
        <Button type="primary" size="large">
          Primary
        </Button>
      </div>,
    );
    assert(wrapper.find(".sky-btn").length >= 1);
    assert(wrapper.find(".sky-btn-primary").length === 2);
    assert(wrapper.find(".sky-btn-danger").length === 1);
    assert(wrapper.find(".sky-btn-default").length === 4);
    assert(wrapper.find(".sky-btn-disabled").length === 1);
    assert(wrapper.find(".sky-btn-loading").length === 1);
    assert(wrapper.find(".sky-btn-block").length === 1);
    assert(wrapper.find(".sky-btn-dashed").length === 1);
  });

  it("should can trigger click event", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick}>sky</Button>);
    wrapper.find(".sky-btn").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("should can not trigger click event", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Button onClick={onClick} disabled>
        sky
      </Button>,
    );
    wrapper.find(".sky-btn").simulate("click");
    expect(onClick).not.toHaveBeenCalled();
  });

  it("should can render loading icon with button", () => {
    const wrapper = shallow(<Button loading>sky</Button>);
    assert(wrapper.find(CircleLoadingIcon).length === 1);
    assert(wrapper.find(".sky-loading").length === 1);
  });
});
