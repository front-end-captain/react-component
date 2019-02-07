import React from "react";
import classNames from "classnames";

import { CircleWrapper } from "./progress.css.js";

const Circle = (props) => {
  const getPathStylesAndPathString = (
    offset,
    percent,
    lineWidth,
    gapDegree = 0,
    gapPosition = "bottom",
  ) => {
    const radius = 50 - lineWidth / 2;

    let XCoordOfStartPoint = 0;
    let YCoordOfStartPoint = -radius;
    let XCoordOfEndPoint = 0;
    let YCoordOfEndPoint = -2 * radius;

    switch (gapPosition) {
      case "left":
        XCoordOfStartPoint = -radius;
        YCoordOfStartPoint = 0;
        XCoordOfEndPoint = 2 * radius;
        YCoordOfEndPoint = 0;
        break;
      case "right":
        XCoordOfStartPoint = radius;
        YCoordOfStartPoint = 0;
        XCoordOfEndPoint = -2 * radius;
        YCoordOfEndPoint = 0;
        break;
      case "bottom":
        YCoordOfStartPoint = radius;
        YCoordOfEndPoint = 2 * radius;
        break;
      default:
    }

    const pathString = `M 50,50 m ${XCoordOfStartPoint},${YCoordOfStartPoint}
     a ${radius},${radius} 0 1 1 ${XCoordOfEndPoint},${-YCoordOfEndPoint}
     a ${radius},${radius} 0 1 1 ${-XCoordOfEndPoint},${YCoordOfEndPoint}`;

    const perimeter = Math.PI * 2 * radius;

    const pathStyle = {
      strokeDasharray: `${(percent / 100) * (perimeter - gapDegree)}px ${perimeter}px`,
      strokeDashoffset: `-${gapDegree / 2 + (offset / 100) * (perimeter - gapDegree)}px`,
      transition:
        "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s, stroke-width 0.06s ease 0.3s", // eslint-disable-line
    };

    return {
      pathString,
      pathStyle,
    };
  };

  const {
    prefixCls,
    className,
    style,
    wrapStyle,
    type,
    percent,
    linecap,
    lineWidth,
    format,
    showInfo,
    status,
    trailColor,
    adoptStrokeColor,
    adoptInfoContent,
  } = props;

  const realLineWidth = lineWidth * 3;
  const gapDegree = type === "dashboard" ? 70 : 0;
  const gapPosition = type === "dashboard" ? "bottom" : "top";

  const { pathString: trailPathString, pathStyle: trailPathStyle } = getPathStylesAndPathString(
    0,
    100,
    realLineWidth,
    gapDegree,
    gapPosition,
  );

  const { pathString: strokePathString, pathStyle: strokePathStyle } = getPathStylesAndPathString(
    0,
    percent,
    realLineWidth,
    gapDegree,
    gapPosition,
  );

  return (
    <CircleWrapper
      prefixCls={prefixCls}
      className={classNames(
        `${prefixCls}-circle-wrapper`,
        `${prefixCls}-circle-${status}`,
        className,
      )}
      style={wrapStyle}
    >
      <svg className={`${prefixCls}-circle`} viewBox="0 0 100 100" style={style}>
        <path
          className={`${prefixCls}-circle-trail`}
          d={trailPathString}
          stroke={trailColor}
          strokeLinecap={linecap}
          strokeWidth={realLineWidth}
          fillOpacity="0"
          style={trailPathStyle}
        />
        <path
          className={`${prefixCls}-circle-path`}
          d={strokePathString}
          stroke={adoptStrokeColor(percent, status)}
          strokeLinecap={linecap}
          strokeWidth={percent === 0 ? 0 : realLineWidth}
          fillOpacity="0"
          style={strokePathStyle}
        />
      </svg>
      {showInfo && (
        <span className={`${prefixCls}-info`}>{adoptInfoContent(percent, status, format)}</span>
      )}
    </CircleWrapper>
  );
};

export default Circle;
