import { configure } from "@storybook/react";

import "./basic.css";

function loadStories() {
  require("./../stories/general.jsx");
}

configure(loadStories, module);
