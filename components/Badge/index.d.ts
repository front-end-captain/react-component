import * as React from "react";

interface BadgeProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  wrapStyle?: React.CSSProperties;

  // 展示的数字，大于 overCount 时显示为 ${overCount}+，为 0 时隐藏
  // 也可以是自定义图标icon
  count?: React.ReactNode;

  // 展示封顶的数字值
  overCount?: number;

  // 不展示数字，只有一个小红点
  dot?: boolean;

  // 设置状态点的位置偏移，格式为 [right, top]
  offset?: [number, number];

  // 当数值为 0 时，是否展示 Badge
  showZero?: boolean;

  // 设置 Badge 为状态点
  status?: "default" | "success" | "error" | "warn" | "info";

  // 在设置了 status 的前提下有效，设置状态点的文本
  text?: string;

  // 设置鼠标放在状态点上时显示的文字
  title?: string;
}

declare const Badge: (props: BadgeProps) => React.ReactNode;

export default Badge;
