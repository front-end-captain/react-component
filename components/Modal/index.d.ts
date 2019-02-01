import * as React from "react";
import * as Button from "./../Button/index.js";

export interface ModalProps {
  // 对话框是否可见
  visible?: boolean;

  // 确认按钮 loading
  confirmLoading?: boolean;

  // 标题
  title: string | React.ReactNode;

  // 是否显示右上角的关闭按钮
  closable: boolean;

  // 点击确认回调函数
  onOk?: (event: React.MouseEvent<any>) => void;

  // 点击取消的回调函数
  onCancel?: (event: React.MouseEvent<any>) => void;

  // 宽度
  width?: string | number;

  // 底部内容
  footer?: React.ReactNode;

  // 确认按钮文字
  okText?: string;

  // 取消按钮文字
  cancelText?: string;

  // 点击蒙层是否关闭模态框
  maskClosable?: boolean;

  // TODO 关闭后是否销毁模态框
  destroyOnClose?: boolean;

  prefixCls?: string;

  wrapClassName?: string;

  children?: React.ReactChildren;

  getPopupContainer?: () => void;

  zIndex?: number;

  // 蒙层样式
  maskStyle?: React.CSSProperties;

  // 是否显示蒙层
  mask?: boolean;

  // modal body 样式
  bodyStyle?: React.CSSProperties;

  // 可以设置浮层的样式、位置等
  style?: React.CSSProperties;

  // 是否垂直居中
  centered?: boolean;

  okButtonProps?: Button.ButtonProps;

  cancelButtonProps?: Button.ButtonProps;
}

export interface ModalState {
  firstMount: boolean;
  destroy: boolean;
}

export interface ModalMethodsProps {
  cancelText?: string;
  className?: string;
  content?: React.ReactNode;
  mask?: boolean;
  maskClosable?: boolean;
  okText?: string;
  prefixCls?: string;
  visible?: boolean;
  title?: React.ReactNode;
  // onOk?: () => void;
  onCancel?: () => void;
  width?: string | number;
  zIndex?: number;
  centered?: boolean;
  okButtonProps?: Button.ButtonProps;
  cancelButtonProps?: Button.ButtonProps;
}

export declare type ModalMethod = (props: ModalMethodsProps) => {
  destroy: () => void;
  update: (newConfig: ModalMethodsProps) => void;
};

declare class Modal extends React.Component<ModalProps, ModalState> {
  static info: ModalMethod;
  static success: ModalMethod;
  static error: ModalMethod;
  static warning: ModalMethod;
}

export default Modal;
