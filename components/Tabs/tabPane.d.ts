import * as React from "react";

export interface TabPaneProps {
  key: string;
  tab: string | React.ReactNode;
  disabled: boolean;
}

declare const TabPane: (props: TabPaneProps) => React.ReactNode;

export default TabPane;
