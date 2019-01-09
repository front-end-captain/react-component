import { configure } from "@storybook/react";

import "./basic.css";

function loadStories() {
  require("./../stories/general.jsx");
  require("./../stories/dataDisplay.jsx");
}

configure(loadStories, module);
