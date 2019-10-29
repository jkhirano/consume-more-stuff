import React, { Component } from "react";
import { connect } from "react-redux";

class NavigationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navigation">
        <li
          className="link"
          onClick={function() {
            props.toggle("homepage");
          }}
        >
          Homepage
        </li>
        <li
          className="link"
          onClick={function() {
            props.toggle("hygiene");
          }}
        >
          Hygiene
        </li>
        <li
          className="link"
          onClick={function() {
            props.toggle("work");
          }}
        >
          Work
        </li>
        <li
          className="link"
          onClick={function() {
            props.toggle("home");
          }}
        >
          Home
        </li>
        <li
          className="link"
          onClick={function() {
            props.toggle("social");
          }}
        >
          Social
        </li>
        <li
          className="link"
          onClick={function() {
            props.toggle("viewAll");
          }}
        >
          View All
        </li>
        <p>{this.props.display}</p>
      </nav>
    );
  }
}

const mapStateToProps = store => {
  return {
    display: store.display
  };
};

const mapDispatchToProps = () => {
  return {
    toggle: link => {
      return dispatch(actionsToggle(link));
    }
  };
};

NavigationComponeent = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationComponent);

export default NavigationComponent;
