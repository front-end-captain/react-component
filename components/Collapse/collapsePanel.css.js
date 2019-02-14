import styled from "styled-components";

const PanelWrapper = styled.div`
  border-bottom: 1px solid #d9d9d9;

  .${(props) => props.prefixCls}-panel-header {
    line-height: 22px;
    padding: 12px 0 12px 40px;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    position: relative;
    transition: all 0.3s;

    .${(props) => props.prefixCls}-panel-header-icon {
      font-style: normal;
      vertical-align: -0.125em;
      text-align: center;
      text-transform: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 14px;
      position: absolute;
      display: inline-block;
      line-height: 46px;
      top: 50%;
      margin-top: 2px;
      transform: translateY(-50%);
      left: 16px;
    }
  }

  .${(props) => props.prefixCls}-panel-content {
    overflow: hidden;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-top: 1px solid #d9d9d9;
    text-indent: 2em;
    padding: 16px;
    transition: all 0.2s;
  }

  .${(props) => props.prefixCls}-panel-content-inactive {
    height: 0;
    border: none;
    padding-top: 0;
    padding-bottom: 0;
  }

  &.${(props) => props.prefixCls}-panel-disabled {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);

    .${(props) => props.prefixCls}-panel-header-icon {
      cursor: not-allowed;
      color: rgba(0, 0, 0, 0.25);
    }
  }
`;

export default PanelWrapper;
