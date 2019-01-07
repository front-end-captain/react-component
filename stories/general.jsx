import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../components/Button/index.js";

import "./style/general.css";

storiesOf("通用", module).add("Button", () => {
  return (
    <div className="button-example">
      <Button>default</Button>
      <Button type="primary">default</Button>
      <Button type="danger">ganger</Button>
      <Button prefixCls="beihai" disabled>
        beihai
      </Button>
    </div>
  );
});
