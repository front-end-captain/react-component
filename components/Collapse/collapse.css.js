import styled from "styled-components";

const CollapseWrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #fafafa;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  border-bottom: 0;

  &.${(props) => props.prefixCls}-wrapper-no-bordered {
    border: none;
    background-color: #fff;

    .${(props) => props.prefixCls}-panel-content {
      border-top: none;
      background-color: transparent;
    }
  }
`;

export default CollapseWrapper;
