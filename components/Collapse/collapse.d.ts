import * as React from "react";

import CollapsePanel from "./collapsePanel";

export interface CollapseProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;

  activeKey?: Array<string> | string;
  defaultActiveKey?: Array<string>;

  // 手风琴模式
  accordion?: boolean;

  // 销毁隐藏的折叠面板
  // destroyInactivePanel?: boolean;
  onChange?: (key: string | string[]) => void;
  bordered?: boolean;

  expandIcon?: React.ReactNode | ((panelProps: CollapseProps) => React.ReactNode);
}

export interface CollapseState {
  activeKey: Array<string>;
}

export default class Collapse extends React.Component<CollapseProps, any> {
  static Panel: typeof CollapsePanel;
}
