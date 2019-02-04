import * as React from "react";

type configContent = React.ReactNode | string;
type configDuration = number;
type configOnClose = () => void;

declare type messageType = "info" | "success" | "error" | "warning" | "loading";

type messageItem = {
  content: React.ReactNode | string,
  key: string,
  duration?: number,
  onClose?: () => void,
  updateKey?: string
  icon: React.ReactNode,
};

interface MessageState {
  messages: Array<messageItem>;
}

export interface ConfigOptions {
  top?: number;
  duration?: number;
  prefixCls?: string;
  getContainer?: () => HTMLElement;
  maxCount?: number;
}

export interface NoticeProps {
  duration?: number;
  onClose?: () => void;
  update?: boolean;
  icon?: React.ReactNode;
}

export class Message extends React.Component<ConfigOptions, MessageState> {}

export class Notice extends React.Component<NoticeProps, any> {}

export interface message {
  info(content: configContent, duration?: configDuration, onClose?: configOnClose): void;
  success(content: configContent, duration?: configDuration, onClose?: configOnClose): void;
  warn(content: configContent, duration?: configDuration, onClose?: configOnClose): void;
  error(content: configContent, duration?: configDuration, onClose?: configOnClose): void;
  loading(content: configContent, duration?: configDuration, onClose?: configOnClose): void;
  config(options: ConfigOptions): void;
  destroy(): void;
}

declare const _default: message;

export default _default;
