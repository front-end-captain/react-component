import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import CalendarBody from "./calendarBody.jsx";

import { getDateData, getYearRange } from "./utils.js";

import { CalendarWrapper, CalendarHeadWrapper } from "./calendar.css.js";

class Calendar extends React.Component {
  static defaultProps = {
    prefixCls: "sky-calender",
    fullscreen: true,
    onSelect: () => {},
    onChange: () => {},
    onPanelChange: () => {},
    disabledDate: () => false,
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    fullscreen: PropTypes.bool,
    onSelect: PropTypes.func,
    dateCellRender: PropTypes.func,
    dateFullCellRender: PropTypes.func,
    onPanelChange: PropTypes.func,
    onChange: PropTypes.func,
    disabledDate: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.date = new Date();

    const year = this.date.getFullYear();
    const month = this.date.getMonth() + 1;
    const today = this.date.getDate();
    const { days } = getDateData(year, month);

    this.state = {
      year,
      month,
      days,
      selectedDay: today,
    };

    this.today = today;
  }

  onYearChange = (event) => {
    const {
      target: { value: year },
    } = event;
    const { month, selectedDay } = this.state;
    const { onPanelChange, onChange } = this.props;
    const { days } = getDateData(Number(year), month);
    const currentDate = new Date(Number(year), month, selectedDay);
    this.setState({ year: Number(year), days }, () => {
      onPanelChange(currentDate);
      onChange(currentDate);
    });
  };

  onMonthChange = (event) => {
    const {
      target: { value: month },
    } = event;
    const { year, selectedDay } = this.state;
    const { onPanelChange, onChange } = this.props;
    const { days } = getDateData(year, Number(month));
    const currentDate = new Date(year, Number(month), selectedDay);
    this.setState({ month: Number(month), days }, () => {
      onPanelChange(currentDate);
      onChange(currentDate);
    });
  };

  onDaySelect = (date) => {
    const { onSelect, onPanelChange, onChange } = this.props;
    const { month } = this.state;

    // 选中当月的某一天
    if (date.getMonth() + 1 === month) {
      this.setState({ selectedDay: date.getDate() }, () => {
        onSelect(date);
        onChange(date);
      });
    }

    // 选择下一月的某一天
    if (date.getMonth() + 1 > month) {
      const nextMonth = date.getMonth() + 1;
      const nextYear = date.getFullYear();
      const { days } = getDateData(nextYear, nextMonth);
      this.setState(
        { year: date.getFullYear(), month: nextMonth, days, selectedDay: date.getDate() },
        () => {
          onSelect(date);
          onPanelChange(date);
          onChange(date);
        },
      );
    }

    // 选择上一月的某一天
    if (date.getMonth() + 1 < month) {
      const prevMonth = date.getMonth() + 1;
      const prevYear = date.getFullYear();
      const { days } = getDateData(prevYear, prevMonth);
      this.setState(
        { year: date.getFullYear(), month: prevMonth, days, selectedDay: date.getDate() },
        () => {
          onSelect(date);
          onPanelChange(date);
          onChange(date);
        },
      );
    }
  };

  render() {
    const { year, month, days, selectedDay } = this.state;
    const {
      prefixCls,
      className,
      style,
      fullscreen,
      dateCellRender,
      dateFullCellRender,
      disabledDate,
    } = this.props;
    const yearsRange = getYearRange(this.date.getFullYear());
    const monthRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const wrapperClassName = classNames(`${prefixCls}-wrapper`, className, {
      [`${prefixCls}-wrapper-fullscreen`]: fullscreen,
    });

    return (
      <CalendarWrapper prefixCls={prefixCls} style={style} className={wrapperClassName}>
        <CalendarHeadWrapper>
          <select onChange={this.onYearChange} value={year}>
            {yearsRange.map((elm) => {
              return (
                <option key={elm} value={elm}>
                  {elm}
                </option>
              );
            })}
          </select>
          <select onChange={this.onMonthChange} value={month}>
            {monthRange.map((item, index) => {
              return (
                <option key={index.toString()} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </CalendarHeadWrapper>
        <CalendarBody
          days={days}
          prefixCls={prefixCls}
          fullscreen={fullscreen}
          month={Number(month)}
          year={Number(year)}
          onSelect={this.onDaySelect}
          selectedDay={selectedDay}
          today={this.today}
          dateCellRender={dateCellRender}
          dateFullCellRender={dateFullCellRender}
          disabledDate={disabledDate}
        />
      </CalendarWrapper>
    );
  }
}

export default Calendar;
