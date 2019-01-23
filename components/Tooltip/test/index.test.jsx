import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Tooltip from "./../index.js";
import TooltipPortal from "./../TooltipPortal.jsx";
import Button from "./../../Button/index.js";

describe("Tooltip", () => {
  it("should render a <Tooltip> component", () => {
    const wrapper = render(
      <div>
        <Tooltip title="prompt text">put the mouse on this</Tooltip>
        <Tooltip title="prompt text" placement="top">
          <Button>top</Button>
        </Tooltip>
        <Tooltip title="prompt text" placement="right">
          <Button>right</Button>
        </Tooltip>
        <Tooltip title="prompt text" placement="bottom">
          <Button>bottom</Button>
        </Tooltip>
        <Tooltip title="prompt text" placement="left">
          <Button>left</Button>
        </Tooltip>
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find `.sky-tooltip` classnames", () => {
    const wrapper = shallow(<Tooltip title="prompt text">put the mouse on this</Tooltip>);
    assert(wrapper.find(".sky-tooltip").length === 1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render specific positions", () => {
    const wrapper = shallow(
      <div>
        <Tooltip title="prompt text" placement="top">
          <Button>top</Button>
        </Tooltip>
        <Tooltip title="prompt text" placement="right">
          <Button>right</Button>
        </Tooltip>
        <Tooltip title="prompt text" placement="bottom">
          <Button>bottom</Button>
        </Tooltip>
        <Tooltip title="prompt text" placement="left">
          <Button>left</Button>
        </Tooltip>
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find position classnames", () => {
    const wrapper = shallow(
      <Tooltip placement="top" title="prompt text">
        <Button>top</Button>
      </Tooltip>,
    );

    assert(wrapper.find(".sky-tooltip-position-top").length === 1);
  });

  it("should find TooltipPortal", () => {
    const wrapper = shallow(
      <Tooltip placement="top">
        <Button>top</Button>
      </Tooltip>,
    );

    assert(wrapper.find(TooltipPortal).length === 1);
  });

  it("should find TooltipPortal when visible change", () => {
    const wrapper = shallow(
      <Tooltip placement="top">
        <Button>top</Button>
      </Tooltip>,
    );

    wrapper.setState({ visible: true });
    assert(wrapper.find(TooltipPortal).length === 1);

    wrapper.setState({ visible: false });
    assert(wrapper.find(TooltipPortal).length === 1);
  });

  it("should find custom children", () => {
    const wrapper = shallow(
      <Tooltip placement="top">
        <Button>top</Button>
      </Tooltip>,
    );

    assert(wrapper.find(Button).length === 1);
  });

  it("should invoking externals callback: onVisibleChange ", () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <Tooltip placement="top" onVisibleChange={onChange} title="prompt text">
        <Button>top</Button>
      </Tooltip>,
    );

    wrapper.find(".sky-tooltip-position-top").simulate("mouseleave");

    setTimeout(() => {
      expect(onChange).toHaveBeenCalled();
    }, 200);
  });

  it("should contain children by TooltipPortal", () => {
    const wrapper = shallow(
      <TooltipPortal>
        <Button>按钮</Button>
      </TooltipPortal>,
    );

    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it("should append div#test to body by TooltipPortal", () => {
    const wrapper = shallow(
      <TooltipPortal>
        <div id="test">test</div>
      </TooltipPortal>,
    );

    expect(wrapper.find("#test")).toHaveLength(1);
  });

  it("should remove div#test when TooltipPortal un mount", () => {
    const wrapper = shallow(
      <TooltipPortal>
        <div id="test">test</div>
      </TooltipPortal>,
    );

    wrapper.unmount();
    expect(wrapper.find("#test")).toHaveLength(0);
  });

  it("window can not call click event handle when tooltip un mount", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Tooltip title="prompt text">
        <Button>按钮</Button>
      </Tooltip>,
    );

    wrapper.unmount();

    window.onclick = () => onClick;

    expect(onClick).not.toHaveBeenCalled();
  });

  it("should update visible state when props visible change", () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <Tooltip title="prompt text" onVisibleChange={onChange}>
        <Button>按钮</Button>
      </Tooltip>,
    );

    wrapper.setProps({ visible: true });
    expect(wrapper.state().visible).toEqual(true);

    wrapper.setProps({ visible: false });
    expect(wrapper.state().visible).toEqual(false);

    expect(onChange).not.toHaveBeenCalled();
  });
});
