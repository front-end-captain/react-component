import { configure } from "@storybook/react";

import "./../components/_style/base.css";

function loadStories() {
  require("./../stories/general.jsx");
}

configure(loadStories, module);
