import styled from "styled-components";

const CalendarWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  list-style: none;
  outline: none;
`;

const CalendarBodyWrapper = styled.div`
  padding: 8px 12px;
  border-top: 1px solid #d9d9d9;

  .${(props) => props.prefixCls}-table {
    width: 100%;
    max-width: 100%;
    height: 256px;
    background-color: transparent;
    border-collapse: collapse;

    thead tr th {
      font-weight: normal;
      text-align: center;
    }

    tbody tr td .${(props) => props.prefixCls}-date-container {
      .${(props) => props.prefixCls}-date-value {
        text-align: center;
        display: block;
        width: 24px;
        height: 24px;
        margin: 0 auto;
        padding: 0;
        color: rgba(0, 0, 0, 0.65);
        line-height: 24px;
        background: transparent;
        border-radius: 2px;
        transition: all 0.3s;
      }

      &:hover {
        .${(props) => props.prefixCls}-date-value {
          background: #e6f7ff;
          cursor: pointer;
        }
      }

      &.${(props) => props.prefixCls}-date-selected-day {
        .${(props) => props.prefixCls}-date-value {
          background-color: #1890ff;
        }
      }

      &.${(props) => props.prefixCls}-date-today {
        .${(props) => props.prefixCls}-date-value {
          box-shadow: 0 0 0 1px #1890ff inset;
        }
      }

      &.${(props) => props.prefixCls}-date-disabled {
        .${(props) => props.prefixCls}-date-value {
          color: rgba(0, 0, 0, 0.25) !important;
        }
      }

      &.${(props) => props.prefixCls}-date-container-not-current-month {
        .${(props) => props.prefixCls}-date-value {
          color: rgba(0, 0, 0, 0.25) !important;
        }
      }
    }
  }

  &.${(props) => props.prefixCls}-body-fullscreen {
    border-top: none;

    .${(props) => props.prefixCls}-table {
      table-layout: fixed;

      thead tr th {
        padding-right: 12px;
        padding-bottom: 5px;
        text-align: right;
      }

      tbody tr td .${(props) => props.prefixCls}-date-container {
        display: block;
        height: 116px;
        margin: 0 4px;
        padding: 4px 8px;
        color: rgba(0, 0, 0, 0.65);
        text-align: left;
        border-top: 2px solid #e8e8e8;
        transition: background 0.3s;

        &:hover {
          background: #e6f7ff;
          cursor: pointer;
        }

        &.${(props) => props.prefixCls}-date-selected-day {
          background-color: #e6f7ff;
        }

        &.${(props) => props.prefixCls}-date-today {
          border-top-color: #1890ff;
        }

        .${(props) => props.prefixCls}-date-value {
          display: block;
          width: auto;
          height: 24px;
          text-align: right;
          margin: 0 auto;
          padding: 0;
          color: rgba(0, 0, 0, 0.65);
          line-height: 24px;
          background: transparent;
          border-radius: 2px;
          transition: all 0.3s;
          box-shadow: none;
        }

        .${(props) => props.prefixCls}-date-content {
          position: static;
          width: auto;
          height: 88px;
          overflow-y: auto;
        }
      }
    }
  }
`;

const CalendarHeadWrapper = styled.div`
  padding: 11px 16px 11px 0;
  text-align: right;

  select {
    padding: 5px 10px;
    border-radius: 4px;
    outline: none;
  }

  select:first-child {
    margin-right: 20px;
  }
`;

export { CalendarBodyWrapper, CalendarHeadWrapper, CalendarWrapper };
