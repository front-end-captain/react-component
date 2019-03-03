import * as React from "react";

// export type CalendarMode = "month" | "year";

export interface DaysItem {
  year: number;
  date: number;
  month: number;
  showDate: number;
}

export type Days = Array<Array<DaysItem>>

export interface CalendarProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;

  // TODO 日历模式
  // mode?: CalendarMode;

  // 展示日期
  value?: Date;

  // 默认展示的日期
  defaultValue?: Date;

  // 是否全屏展示 即是否充满父容器
  fullscreen?: boolean;

  // 自定义渲染日期单元格，返回内容会被追加到单元格
  dateCellRender?: (date: Date) => React.ReactNode;

  // TODO 自定义渲染月单元格，返回内容会被追加到单元格
  // monthCellRender?: (date: Date) => React.ReactNode;

  // 自定义渲染日期单元格，返回内容覆盖单元格
  dateFullCellRender?: (date: Date) => React.ReactNode;

  // TODO 自定义渲染月单元格，返回内容覆盖单元格
  // monthFullCellRender?: (date: Date) => React.ReactNode;

  // 日期面板变化回调
  onPanelChange?: (date?: Date) => void;

  // 点击选择日期回调
  onSelect?: (date?: Date) => void;

  // 日期变化回调
  onChange?: (date?: Date) => void;

  // 不可选择的日期
  disabledDate?: (current: Date) => boolean;

  // TODO 设置可以显示的日期
  // validRange?: [Date, Date];
}

export interface CalendarState {
  year: number;
  month: number;
  days: Days;
  selectedDay: number;
  // mode?: CalendarMode;
}

export default class Calendar extends React.Component<CalendarProps, CalendarState> {}
