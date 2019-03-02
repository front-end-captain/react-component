import styled from "styled-components";

import { primaryColor } from "./../_style/vars.js";

const PaginationWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  list-style: none;

  &.${(props) => props.prefixCls}-wrapper-single {
    display: none;
  }

  .${(props) => props.prefixCls}-item {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 32px;
    height: 32px;
    margin-right: 8px;
    list-style: none;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    outline: 0;
    cursor: pointer;
    user-select: none;

    a {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      color: rgba(0, 0, 0, 0.65);
    }
  }

  .${(props) => props.prefixCls}-item-prev, .${(props) => props.prefixCls}-item-next {
    a {
      font-size: 18px;
    }
  }

  .${(props) => props.prefixCls}-item-selected {
    font-weight: 500;
    border-color: #1890ff;

    a {
      color: #1890ff;
    }
  }

  .${(props) => props.prefixCls}-item-disabled {
    cursor: not-allowed;

    a {
      color: rgba(0, 0, 0, 0.25);
      border-color: #d9d9d9;
      cursor: not-allowed;
    }
  }

  .${(props) => props.prefixCls}-item-jump {
    border: none;
    position: relative;

    a {
      color: rgba(0, 0, 0, 0.35);
      font-size: 18px;

      > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.1s;
      }

      .${(props) => props.prefixCls}-item-jump-arrow {
        opacity: 0;
      }

      .${(props) => props.prefixCls}-item-ellipsis {
        opacity: 1;
      }
    }
  }

  .${(props) => props.prefixCls}-item-jump:hover {
    a {
      color: ${primaryColor};
      font-size: 14px;

      .${(props) => props.prefixCls}-item-jump-arrow {
        opacity: 1;
      }

      .${(props) => props.prefixCls}-item-ellipsis {
        opacity: 0;
      }
    }
  }

  .${(props) => props.prefixCls}-item-total {
    border: none;
  }

  .${(props) => props.prefixCls}-item-quick-jumper {
    border: none;
    margin-left: 15px;

    input {
      position: relative;
      display: inline-block;
      height: auto;
      padding: 4px 11px;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      line-height: 1.5;
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      transition: all 0.3s;
      width: 30px;
      margin: 0 8px;
    }

    input:focus {
      border-color: #40a9ff;
      border-right-width: 1px !important;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }
`;

export default PaginationWrapper;
