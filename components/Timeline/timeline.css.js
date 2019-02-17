import styled from "styled-components";

import { skySpinRotate } from "./../_style/animate.js";

const TimelineWrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  list-style: none;
  margin: 0;
  padding: 0;

  &.${(props) => props.prefixCls}-wrapper-pending {
    .${(props) => props.prefixCls}-item-last {
      .${(props) => props.prefixCls}-item-tail {
        display: block;
        border-left: 2px dashed #e8e8e8;
      }
    }
  }

  &.${(props) => props.prefixCls}-wrapper-alternate {
    .${(props) => props.prefixCls}-item-left {
      .${(props) => props.prefixCls}-item-content {
        text-align: left;
        left: 50%;
        width: 50%;
      }

      .${(props) => props.prefixCls}-item-tail {
        left: 50%;
      }

      .${(props) => props.prefixCls}-item-head {
        left: 50%;
        margin-left: -4px;
      }

      .${(props) => props.prefixCls}-item-head-custom {
        margin-left: -8px;
      }
    }

    .${(props) => props.prefixCls}-item-right {
      .${(props) => props.prefixCls}-item-content {
        text-align: right;
        right: 50%;
        margin-right: 18px;
        width: 50%;
        left: -30px;
      }

      .${(props) => props.prefixCls}-item-tail {
        left: 50%;
      }

      .${(props) => props.prefixCls}-item-head {
        left: 50%;
        margin-left: -4px;
      }

      .${(props) => props.prefixCls}-item-head-custom {
        margin-left: -8px;
      }
    }
  }

  &.${(props) => props.prefixCls}-wrapper-right {
    .${(props) => props.prefixCls}-item-right {
      .${(props) => props.prefixCls}-item-content {
        right: 0;
        width: 100%;
        left: -30px;
        text-align: right;
      }

      .${(props) => props.prefixCls}-item-tail {
        left: 100%;
      }

      .${(props) => props.prefixCls}-item-head {
        left: 100%;
        margin-left: -4px;
      }

      .${(props) => props.prefixCls}-item-head-custom {
        margin-left: -8px;
      }
    }
  }
`;

const TimelineItemWrapper = styled.li`
  position: relative;
  padding: 0 0 20px;
  list-style: none;
  margin: 0;
  font-size: 14px;

  .${(props) => props.prefixCls}-item-tail {
    position: absolute;
    left: 4px;
    top: 0.85em;
    height: 100%;
    border-left: 2px solid #e8e8e8;
  }

  .${(props) => props.prefixCls}-item-head {
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 100px;
    border-width: 2px;
    border-style: solid;
    border-color: ${(props) => props.color};
    color: ${(props) => props.color};
    box-sizing: content-box;

    .${(props) => props.prefixCls}-item-head-custom-icon {
      animation: ${skySpinRotate} 1s linear infinite;
    }
  }

  .${(props) => props.prefixCls}-item-head-custom {
    border: none;
    width: auto;
    height: auto;
    left: -4px;
  }

  .${(props) => props.prefixCls}-item-content {
    margin: 0 0 0 18px;
    position: relative;
    top: -6px;
  }

  &.${(props) => props.prefixCls}-item-last {
    .${(props) => props.prefixCls}-item-content {
      min-height: 48px;
    }

    .${(props) => props.prefixCls}-item-tail {
      display: none;
    }
  }

  &.${(props) => props.prefixCls}-item-pending {
    .${(props) => props.prefixCls}-item-head {
      font-size: 12px;
      width: auto;
      height: auto;
      left: -2px;
    }

    .${(props) => props.prefixCls}-item-tail {
      display: none;
    }
  }
`;

export { TimelineWrapper, TimelineItemWrapper };
