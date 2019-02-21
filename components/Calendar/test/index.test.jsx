import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";

import Calendar from "./../index.js";

describe("Calendar", () => {
  it("should render some calendars", () => {
    const wrapper = render(
      <div>
        <Calendar />
        <div style={{ width: 300, border: "1px solid #d9d9d9", borderRadius: 4 }}>
          <Calendar fullscreen={false} disabledDate={(date) => date.getDate() === 10} />
        </div>
        <Calendar
          dateCellRender={(date) => (date.getDate() === 21 ? "custom content" : "")}
          disabledDate={(date) => date.getDate() === 12}
        />
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
