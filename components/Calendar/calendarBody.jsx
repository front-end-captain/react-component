import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { CalendarBodyWrapper } from "./calendar.css.js";

const CalendarBody = (props) => {
  const {
    month,
    days,
    prefixCls,
    fullscreen,
    onSelect,
    today,
    selectedDay,
    dateCellRender,
    dateFullCellRender,
    disabledDate,
  } = props;
  const weeks = ["一", "二", "三", "四", "五", "六", "日"];

  const bodyClassName = classNames(`${prefixCls}-body`, {
    [`${prefixCls}-body-fullscreen`]: fullscreen,
  });

  return (
    <CalendarBodyWrapper prefixCls={prefixCls} className={bodyClassName}>
      <table className={`${prefixCls}-table`}>
        <thead>
          <tr>
            {weeks.map((week) => {
              return <th key={week}>{week}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {days.map((group, index) => {
            return (
              <tr key={index.toString()}>
                {group.map((day, num) => {
                  const currentDate = new Date(day.year, day.month - 1, day.showDate);
                  return (
                    <td key={num.toString()}>
                      <div
                        className={classNames(`${prefixCls}-date-container`, {
                          [`${prefixCls}-date-container-not-current-month`]: day.month !== month,
                          [`${prefixCls}-date-selected-day`]:
                            day.month === month && day.showDate === selectedDay,
                          [`${prefixCls}-date-today`]:
                            day.month === month && day.showDate === today,
                          [`${prefixCls}-date-disabled`]: disabledDate(currentDate),
                        })}
                        onClick={() => onSelect(currentDate)}
                      >
                        {typeof dateFullCellRender === "function" ? (
                          dateFullCellRender(currentDate)
                        ) : (
                          <>
                            <div
                              className={`${prefixCls}-date-value`}
                              title={`${day.year}-${day.month}-${day.showDate}`}
                            >
                              {day.showDate}
                            </div>
                            <div className={`${prefixCls}-date-content`}>
                              {typeof dateCellRender === "function"
                                ? dateCellRender(currentDate)
                                : null}
                            </div>
                          </>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </CalendarBodyWrapper>
  );
};

CalendarBody.propTypes = {
  month: PropTypes.number,
  days: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number))),
  today: PropTypes.number,
  selectedDay: PropTypes.number,
  fullscreen: PropTypes.bool,
  onSelect: PropTypes.func,
  dateCellRender: PropTypes.func,
  dateFullCellRender: PropTypes.func,
  disabledDate: PropTypes.func,
};

export default CalendarBody;
