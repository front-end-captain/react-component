import React from "react";
import PropTypes from "prop-types";

import Line from "./line.jsx";
import Circle from "./circle.jsx";
import { ErrorIcon, SuccessIcon } from "./../Icon/index.jsx";

import { progressTrailColor, successColor, errorColor, infoColor } from "./../_style/vars.js";

const Progress = (props) => {
  const { type, lineColor } = props;

  const adoptStrokeColor = (percent, status) => {
    if (percent === 0) {
      return progressTrailColor;
    }

    if (status === "exception" && percent !== 0) {
      return errorColor;
    }
    if (status === "success" || percent === 100) {
      return successColor;
    }

    return lineColor;
  };

  const adoptInfoContent = (percent, status, formatMethod) => {
    if (formatMethod !== undefined) {
      return formatMethod(percent);
    }
    if (status === "exception") {
      return <ErrorIcon style={{ color: errorColor }} />;
    }
    if (status === "success" || percent === 100) {
      return <SuccessIcon style={{ color: successColor }} />;
    }

    return `${percent}%`;
  };

  const adoptMethod = { adoptInfoContent, adoptStrokeColor };

  const mixProps = { ...props, ...adoptMethod, trailColor: progressTrailColor };

  if (type === "circle" || type === "dashboard") {
    return <Circle {...mixProps} />;
  }

  return <Line {...mixProps} />;
};

Progress.defaultProps = {
  prefixCls: "sky-progress",
  type: "line",
  percent: 0,
  showInfo: true,
  lineColor: infoColor,
  linecap: "round",
  lineWidth: 1.5,
  status: "normal",
};

Progress.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(["line", "circle", "dashboard"]),
  percent: PropTypes.number,
  showInfo: PropTypes.bool,
  status: PropTypes.oneOf(["normal", "exception", "success"]),
  linecap: PropTypes.oneOf(["round", "square"]),
  lineColor: PropTypes.string,
  lineWidth: PropTypes.number,
  style: PropTypes.objectOf(PropTypes.string),
  wrapStyle: PropTypes.objectOf(PropTypes.string),
  format: PropTypes.func,
};

export default Progress;
