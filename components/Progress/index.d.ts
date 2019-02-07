import * as React from "react";

export interface ProgressProps {
  // 所有样式类名前缀 默认 sky-progress
  prefixCls?: string;

  // 应用于包裹容器的样式类名
  className?: string;

  // 进度条类型 默认 line
  type?: "line" | "circle" | "dashboard";

  // 进度条占比
  percent?: number;

  // 是否显示提示内容 默认 true
  showInfo?: boolean;

  // 进度条状态 默认 normal
  status?: "normal" | "exception" | "success";

  // 进度条宽度 默认 1.5
  lineWidth?: number;

  // 进度条边缘的形状 默认 round
  linecap?: "round" | "square";

  // 进度条颜色 默认 #13c2c2
  lineColor?: string;

  // 应用于 svg 元素的样式
  style?: React.CSSProperties;

  // 应用于包裹容器的样式
  wrapStyle?: React.CSSProperties;

  // 指定提示内容的模板函数 默认 {percent}%
  format?: (percent?: number) => React.ReactNode;
}

declare const Progress: (ProgressProps) => React.ReactNode;

export default Progress;
