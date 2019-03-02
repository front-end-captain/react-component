import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";

import Pagination from "./../index.js";

describe("Pagination", () => {
  it("should render some Pagination components", () => {
    const wrapper = render(
      <div>
        <Pagination total={90} />
        <Pagination total={5000} defaultPageSize={5} defaultCurrent={7} />
        <Pagination
          total={400}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        />
        <Pagination total={1000} defaultPageSize={5} showQuickJumper />
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
