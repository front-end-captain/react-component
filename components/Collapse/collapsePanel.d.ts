import * as React from 'react';

export interface CollapsePanelProps {
    id: string;
    className?: string;
    style?: React.CSSProperties;
    prefixCls: string;
    key: string;

    // 面板头内容
    header: React.ReactNode;
    disabled?: boolean;
    showArrow?: boolean;

    // 面板隐藏时是否渲染 DOM 结构
    // forceRender?: boolean;
    isActive: boolean;
    // destroyInactivePanel: boolean;
    arrordion: boolean;
    expandIcon?: React.ReactNode | ((panelProps: CollapseProps) => React.ReactNode);
}
export default class CollapsePanel extends React.Component<CollapsePanelProps, {}> {}
