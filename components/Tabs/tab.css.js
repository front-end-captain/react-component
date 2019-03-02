/* stylelint-disable declaration-colon-newline-after */
/* stylelint-disable indentation */
import styled from "styled-components";

const TabsWrapper = styled.div`
  display: block;
`;

const TabsHeaderWrapper = styled.div`
  display: block;
  position: relative;
  outline: none;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  .${(props) => props.prefixCls}-nav {
    display: inline-block;
    width: auto;
    position: relative;

    .${(props) => props.prefixCls}-header-item {
      display: inline-block;
      box-sizing: border-box;
      height: 100%;
      margin: 0 32px 0 0;
      padding: 12px 16px;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .${(props) => props.prefixCls}-header-item-active {
      color: #1890ff;
      font-weight: 500;
    }

    .${(props) => props.prefixCls}-header-item-disabled {
      cursor: not-allowed;
      color: rgba(0, 0, 0, 0.25);
    }

    .${(props) => props.prefixCls}-ink-line {
      position: absolute;
      bottom: -1px;
      left: 0;
      z-index: 1;
      box-sizing: border-box;
      height: 2px;
      background-color: #1890ff;
      transform-origin: 0 0;
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &.${(props) => props.prefixCls}-nav-card {
      .${(props) => props.prefixCls}-header-item {
        margin: 0;
        margin-right: 2px;
        padding: 0 16px;
        line-height: 38px;
        border: 1px solid #e8e8e8;
        border-bottom: 0;
        border-radius: 4px 4px 0 0;
      }

      .${(props) => props.prefixCls}-ink-line {
        visibility: hidden;
      }

      .${(props) => props.prefixCls}-header-item-active {
        margin-bottom: -1px;
        color: #1890ff;
        background: #fff;
        border-color: #e8e8e8;
        border-bottom: 1px solid transparent;
      }
    }
  }
`;

const TabsPaneWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  will-change: margin-left;

  .${(props) => props.prefixCls}-pane-item {
    display: inline-block;
    flex-shrink: 0;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid #e8e8e8;
  }

  .${(props) => props.prefixCls}-pane-item-active {
    opacity: 1;
    transition: opacity 0.3s;
  }

  .${(props) => props.prefixCls}-pane-item-inactive {
    height: 0;
    padding: 0 !important;
    opacity: 0;
    pointer-events: none;
  }
`;

export { TabsWrapper, TabsHeaderWrapper, TabsPaneWrapper };
