import React from "react";
import classNames from "classnames";

import { LineWrapper } from "./progress.css.js";

const Line = (props) => {
  const {
    className,
    percent,
    prefixCls,
    linecap,
    lineWidth,
    format,
    style,
    showInfo,
    status,
    trailColor,
    wrapStyle,
    adoptStrokeColor,
    adoptInfoContent,
  } = props;

  const YCoordOfStartPoint = lineWidth / 2;
  const YCoordOfEndPoint = 100 - lineWidth / 2;
  const startPoint = `${linecap === "round" ? YCoordOfStartPoint : 0}, ${YCoordOfStartPoint}`;
  const endPoint = `${linecap === "round" ? YCoordOfEndPoint : 100}, ${YCoordOfStartPoint}`;
  const pathString = `M ${startPoint} L ${endPoint}`;
  const viewBoxString = `0 0 100 ${lineWidth}`;

  const pathStyle = {
    strokeDasharray: `${percent}px, 100px`,
    strokeDashoffset: "0px",
    transition: "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear",
  };

  const wrapClassNames = classNames(
    `${prefixCls}-line-wrapper`,
    `${prefixCls}-line-${status}`,
    className,
  );

  return (
    <LineWrapper
      lineWidth={lineWidth}
      prefixCls={prefixCls}
      className={wrapClassNames}
      style={wrapStyle}
    >
      <svg
        className={`${prefixCls}-line`}
        viewBox={viewBoxString}
        preserveAspectRatio="none"
        style={style}
      >
        <path
          className={`${prefixCls}-line-trail`}
          d={pathString}
          strokeLinecap={linecap}
          stroke={trailColor}
          strokeWidth={lineWidth}
          fillOpacity="0"
        />
        <path
          className={`${prefixCls}-line-path`}
          d={pathString}
          strokeLinecap={linecap}
          stroke={adoptStrokeColor(percent, status)}
          strokeWidth={lineWidth}
          fillOpacity="0"
          style={pathStyle}
        />
      </svg>
      {showInfo && (
        <span className={`${prefixCls}-info`}>{adoptInfoContent(percent, status, format)}</span>
      )}
    </LineWrapper>
  );
};

export default Line;
