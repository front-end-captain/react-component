import * as React from "react";

interface TimelineItemProps {
  prefixCls?: string;
  className?: string;
  color?: string;
  dot?: React.ReactNode;
  pending?: boolean;
  style?: React.CSSProperties;
}

declare const TimelineItem: (props: TimelineItemProps) => React.ReactNode;

export default TimelineItem;
