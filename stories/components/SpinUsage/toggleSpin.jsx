import React from "react";

import Spin from "./../../../components/Spin/index.js";

class ToggleSpin extends React.Component {
  state = { loading: false };

  toggle = (event) => {
    this.setState({ loading: event.target.checked });
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Spin spinning={loading}>
          <div
            style={{
              padding: "30px 10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              backgroundColor: "#e6f7ff",
            }}
          >
            some content
          </div>
        </Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：
          <input type="checkbox" checked={loading} onChange={this.toggle} />
        </div>
      </div>
    );
  }
}

export default ToggleSpin;
