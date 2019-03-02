import { configure, addDecorator } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";

import pkg from "./../package.json";

import "./basic.css";

function loadStories() {
  require("./../stories/general.jsx");
  require("./../stories/navigation.jsx");
  require("./../stories/dataDisplay.jsx");
  require("./../stories/feedback.jsx");
}

addDecorator(
  withOptions({
    name: `Sky UI, version ${pkg.version}`,
    url: `${pkg.homepage}`,
    showAddonPanel: false,
    theme: {
      storiesNav: {
        backgroundColor: "rgba(245, 245, 245, 0.5)",
        paddingRight: "10px",
      },
      filter: {
        border: "1px solid #ddd",
        borderRadius: "6px",
        height: "40px",
        fontSize: "16px",
      },
      treeMenuHeader: {
        marginTop: "10px",
        marginBottom: "4px",
      },
      menuLink: {
        color: "#444",
        padding: "6px 0",
        textIndent: "4px",
        borderRadius: "4px",
      },
    },
  }),
);

configure(loadStories, module);
