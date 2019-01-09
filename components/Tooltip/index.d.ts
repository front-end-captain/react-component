import * as React from "react";

export type TooltipTrigger = "hover" | "click";

export type TooltipPlacement = "top" | "left" | "right" | "bottom";

export interface AbstractTooltipProps {
  prefixCls?: string;
  overlayClassName?: string;
  placement?: TooltipPlacement;
  defaultVisible?: boolean;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  trigger?: TooltipTrigger;
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
  children?: React.ReactNode;
}

export interface TooltipProps extends AbstractTooltipProps {
  title?: React.ReactNode | RenderFunction;
}

export default class Tooltip extends React.Component<TooltipProps, any> {}
