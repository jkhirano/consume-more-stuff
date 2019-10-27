import React, { Component } from "react";

class NavigationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navigation">
        <li className="link">Home</li>
        <li className="link">Category 1</li>
        <li className="link">Category 2</li>
        <li className="link">Category 3</li>
        <li className="link">Category 4</li>
        <li className="link">Category 5</li>
      </nav>
    );
  }
}

export default NavigationComponent;
