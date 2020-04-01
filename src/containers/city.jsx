import React, { Component } from "react";

class City extends Component {
  render() {
    return (
      <div className="card">
        <p>{this.props.cit.name}</p>
      </div>
    );
  }
}

export default City;