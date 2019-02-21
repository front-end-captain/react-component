const getDateData = (year, month) => {
  const ret = [];
  let realYear = year;
  let realMonth = month;

  if (!year || !month) {
    const today = new Date();
    realYear = today.getFullYear();
    realMonth = today.getMonth() + 1;
  }

  const prevYear = realYear - 1;
  const nextYear = realYear + 1;

  // 获取当月第一天
  const firstDayOfCurrentMonth = new Date(realYear, realMonth - 1, 1);

  // 确定当月的第一天是星期几
  // [1, 2, 3, 4, 5, 6, 0]; 0 表示星期日，1 表示星期一，以此类推
  let weekOfFirstDay = firstDayOfCurrentMonth.getDay();

  // 当月第一天是星期日
  if (weekOfFirstDay === 0) {
    weekOfFirstDay = 7;
  }

  realYear = firstDayOfCurrentMonth.getFullYear();
  realMonth = firstDayOfCurrentMonth.getMonth() + 1;

  // 获取上一个月的最后一天
  const lastDayOfPrevMonth = new Date(realYear, realMonth - 1, 0);
  // getDate 返回日期对象是某个月的第几天
  // 这里是确定上一个月有 30 天还是 31 天
  const lastDateOfPrevMonth = lastDayOfPrevMonth.getDate();

  // ???
  const preMonthDayCount = weekOfFirstDay - 1;

  // 获取当月的最后一个
  const lastDayOfCurrentMonth = new Date(realYear, realMonth, 0);
  const lastDateOfCurrentMonth = lastDayOfCurrentMonth.getDate();

  let row = [];
  for (let i = 0; i < 7 * 6; i += 1) {
    const date = i + 1 - preMonthDayCount;
    let showDate = date;
    let currentMonth = realMonth;

    if (date <= 0) {
      currentMonth = realMonth - 1;
      showDate = lastDateOfPrevMonth + date;
    } else if (date > lastDateOfCurrentMonth) {
      currentMonth = realMonth + 1;
      showDate = date - lastDateOfCurrentMonth;
    }
    if (currentMonth === 0) {
      realYear = prevYear;
      currentMonth = 12;
    }
    if (currentMonth === 13) {
      currentMonth = 1;
      realYear = nextYear;
    }

    // 分组 6 * 7
    if (i % 7 !== 6) {
      row.push({
        year: realYear,
        date,
        showDate,
        month: currentMonth,
      });
    }
    if (i % 7 === 6) {
      row.push({
        year: realYear,
        date,
        showDate,
        month: currentMonth,
      });
      ret.push(row);
      row = [];
    }
  }

  return {
    year: realYear,
    month: realMonth,
    days: ret,
  };
};

const getYearRange = (fullYear) => {
  const startYear = fullYear - 10;
  const endYear = fullYear + 10;

  const prevDecade = [];
  const nextDecade = [];
  for (let i = startYear; i < fullYear; i += 1) {
    prevDecade.push(i);
  }
  for (let j = fullYear; j < endYear; j += 1) {
    nextDecade.push(j);
  }

  return prevDecade.concat(nextDecade);
};

export { getDateData, getYearRange };
