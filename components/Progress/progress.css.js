import styled from "styled-components";

export const LineWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  .${(props) => props.prefixCls}-line {
    flex: 9 1;
  }

  .${(props) => props.prefixCls}-info {
    display: flex;
    flex: 1 1;
    word-break: normal;
    white-space: nowrap;
    font-size: 14px;
    line-height: 1;
    padding-left: 14px;
    color: rgba(0, 0, 0, 0.45);
  }
`;

export const CircleWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 120px;
  height: 120px;

  .${(props) => props.prefixCls}-info {
    position: absolute;
    width: 100%;
    text-align: center;
    line-height: 1;
    font-size: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    white-space: normal;
  }
`;
