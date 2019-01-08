import * as React from "react";

export declare type ButtonType = "default" | "primary" | "dashed" | "danger";
export declare type ButtonSize = "large" | "default" | "small";
export declare type ButtonHtmlType = "button" | "submit" | "reset";

export interface BaseButtonProps {
  disabled?: boolean;
  loading?: boolean;
  type?: ButtonType;
  size?: ButtonSize;
  prefixCls?: string;
  className?: string;
  block: boolean;
  htmlType?: ButtonHtmlType;
  children?: React.ReactNode;
}

export type NativeButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = NativeButtonProps;

declare const Button: (props: ButtonProps) => React.ReactNode;

export default Button;
