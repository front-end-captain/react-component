import React from "react";
import { render } from "enzyme";
import assert from "power-assert";
import toJson from "enzyme-to-json";

import Modal from "./../index.js";

describe("<Modal />", () => {
  it("should render a Modal component", () => {
    const wrapper = render(
      <div>
        <Modal title="基本使用" visible>
          <p>some contents ...</p>
        </Modal>
        <Modal title="自定义取消按钮文字" cancelText="cancel" visible>
          <p>some contents ...</p>
        </Modal>
        <Modal title="没有 footer" visible footer={null}>
          <p>some contents ...</p>
        </Modal>
        <Modal title="水平垂直居中" visible centered>
          <p>some contents ...</p>
        </Modal>
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should return destroy method", () => {
    const modal = Modal.info();
    assert(modal.destroy && modal.destroy instanceof Function);
  });
});
