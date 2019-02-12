import React from "react";

import Badge from "./../../../components/Badge/index.js";
import Button from "./../../../components/Button/index.js";

class DynamicBadge extends React.Component {
  state = {
    count: 98,
    show: true,
  };

  increase = () => {
    const { count } = this.state;
    if (count > 99) {
      return;
    }
    this.setState({ count: count + 1 });
  };

  decline = () => {
    const { count } = this.state;
    this.setState({ count: count === 0 ? 0 : count - 1 });
  };

  onChange = (event) => {
    this.setState({ show: event.target.checked });
  };

  render() {
    const { count, show } = this.state;
    return (
      <div>
        <div>
          <Badge count={count} showZero title="something">
            <a href="#" className="badge-example">
              {}
            </a>
          </Badge>
          <Button onClick={this.decline} style={{ marginLeft: "20px" }}>
            _
          </Button>
          <Button onClick={this.increase}>+</Button>
        </div>
        <div style={{ marginTop: 10 }}>
          <Badge dot={show}>
            <a href="#" className="badge-example">
              {}
            </a>
          </Badge>
          <input type="checkbox" checked={show} onChange={this.onChange} />
        </div>
      </div>
    );
  }
}

export default DynamicBadge;
