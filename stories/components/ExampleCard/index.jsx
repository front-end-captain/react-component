import React from "react";
import classNames from "classnames";
import "./index.css";

const ExampleCard = ({ title, description, children, className, ...rest }) => {
  const cls = classNames("example-card-wrapper", className);
  return (
    <div className={cls} {...rest}>
      <div className="example-card-content">{children}</div>
      <div className="example-card-description-wrapper">
        <span className="example-card-description-title">{title}</span>
        <div className="example-card-description-content">{description}</div>
      </div>
    </div>
  );
};

export default ExampleCard;
