import * as React from "react";

interface alertProps {
  type?: "info" | "warn" | "success" | "error";
  closable?: boolean;
  title?: React.ReactNode;
  content?: React.ReactNode;
  onClose?: React.MouseEventHandler<HTMLAnchorElement>;
  afterClose?: () => void;
  showIcon?: boolean;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
}

interface alertState {
  closing: boolean;
  closed: boolean;
}

export default class Alert extends React.Component<alertProps, alertState> {}
