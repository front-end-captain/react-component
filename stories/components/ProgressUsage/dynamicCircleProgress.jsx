import React from "react";

import Progress from "../../../components/Progress/index.js";
import Button from "../../../components/Button/index.js";

class DynamicCircleProgress extends React.Component {
  state = {
    percent: 60,
  };

  increase = () => {
    const { percent } = this.state;
    let newPercent = percent + 10;
    if (newPercent > 100) {
      newPercent = 100;
    }
    this.setState({ percent: newPercent });
  };

  decline = () => {
    const { percent } = this.state;
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    this.setState({ percent: newPercent });
  };

  render() {
    const { percent } = this.state;

    return (
      <div>
        <Progress percent={percent} type="circle" />
        <div style={{ marginTop: "10px" }}>
          <Button onClick={this.decline}>-</Button>
          <Button onClick={this.increase}>+</Button>
        </div>
      </div>
    );
  }
}

export default DynamicCircleProgress;
