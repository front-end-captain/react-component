import * as React from "react";

import TimelineItem from "./timelineItem";

interface TimelineProps {
  prefixCls?: string;
  className?: string;

  // 指定最后一个幽灵节点的内容或者是否存在
  pending?: React.ReactNode | boolean | string;

  // 当最后一个幽灵节点存在時，指定其时间图点
  pendingDot?: React.ReactNode;
  style?: React.CSSProperties;
  // reverse?: boolean;

  // 时间轴和内容的相对位置
  mode?: "left" | "alternate" | "right";
}

export default class Timeline extends React.Component<TimelineProps, any> {
  static Item: typeof TimelineItem;
}
