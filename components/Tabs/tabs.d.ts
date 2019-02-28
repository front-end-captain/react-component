import * as React from "react";

import TabPane from "./tabPane";

interface TabsProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  tabBarStyle?: React.CSSProperties;

  type: "line" | "card";

  activeKey?: string;
  defaultActiveKey?: string;
  // animated?: boolean;

  // renderTabBar?: (props: TabsProps, defaultTabBar: React.ReactNode) => React.ReactNode;
  tabBarExtraContent?: React.ReactNode;

  onChange?: (activeKey: string) => void;
  // onNextClick?: (nextActiveKey: string) => void;
  // onPrevClick?: (nextActiveKey: string) => void;
  onTabClick?: (key: string) => void;
}

interface TabsState {
  activeKey: number,
}

export default class Tabs extends React.Component<TabsProps, TabsState> {
  static TabPane: typeof TabPane;
}
