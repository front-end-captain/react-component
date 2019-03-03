import * as React from "react";

declare type PagerType = "page" | "prev" | "next" | "jumper-prev" | "jumper-next";

export interface PaginationProps {
  // 当前那一页
  current?: number;

  // 默认当前那一页 默认为 1
  defaultCurrent?: number;

  // 每一页条数
  pageSize?: number;

  // 默认每一页条数 默认为 10
  defaultPageSize?: number;

  // 数据总条数
  total?: number;

  // 页面后改变后的回掉 参数是改变后的页码和每页条数
  onChange?: (page: number, pageSize: number) => void;

  // 只有一页时，是否隐藏分页器 默认 FALSE
  hideOnSinglePage?: boolean;

  // TODO 自定义页码的结构
  // itemRender?: (current: number, page: number, type: PagerType, originalElement: React.ReactNode) => React.ReactNode;

  // 用于显示数据总量和当前数据顺序
  showTotal?: (total: number, range: [number, number]) => string;

  // 是否可以快速跳转至某页 默认 FALSE
  showQuickJumper?: boolean;
}

export default class Pagination extends React.Component<PaginationProps, {}> {}
