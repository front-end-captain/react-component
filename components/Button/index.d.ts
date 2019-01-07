import * as React from "react";

export declare type ButtonType = "default" | "primary" | "dashed" | "danger";
export declare type ButtonSize = "large" | "default" | "small";
export declare type ButtonHtmlType = "button" | "submit" | "reset";

export interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  type?: ButtonType;
  size?: ButtonSize;
  prefixCls?: string;
  className?: string;
  htmlType?: ButtonHtmlType;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
}

declare const Button: (props: ButtonProps) => React.ReactNode;

export default Button;
