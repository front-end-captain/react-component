import * as React from "react";

interface SpinProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  spinning?: boolean;
  size?: "small" | "default" | "large";
  tip?: React.ReactNode;
  indicator?: React.ReactElement<any>;

  // TODO: 延迟显示加载效果的时间
  // delay?: number;
}

declare const Spin: (props: SpinProps) => React.ReactNode;

export default Spin;
