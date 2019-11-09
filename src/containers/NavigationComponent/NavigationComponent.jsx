import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsToggle } from "../../actions";

class NavigationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleHomepageClick = () => {
    this.props.toggle("homepage");
  };

  handleHygieneClick = () => {
    this.props.toggle("hygiene");
  };

  handleHomeClick = () => {
    this.props.toggle("home");
  };

  handleSocialClick = () => {
    this.props.toggle("social");
  };

  handleWorkClick = () => {
    this.props.toggle("work");
  };

  handleViewAllClick = () => {
    this.props.toggle("viewAll");
  };
  render() {
    return (
      <nav className="navigation">
        <li className="link" onClick={this.handleHomepageClick}>
          Homepage
        </li>
        <li className="link" onClick={this.handleHygieneClick}>
          Hygiene
        </li>
        <li className="link" onClick={this.handleWorkClick}>
          Work
        </li>
        <li className="link" onClick={this.handleHomeClick}>
          Home
        </li>
        <li className="link" onClick={this.handleSocialClick}>
          Social
        </li>
        <li className="link" onClick={this.handleViewAllClick}>
          View All
        </li>
      </nav>
    );
  }
}

const mapStateToProps = store => {
  console.log("current navbar mapStateToProps...", store.display);
  return {
    display: store.display
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggle: link => {
      return dispatch(actionsToggle(link));
    }
  };
};

NavigationComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationComponent);

export default NavigationComponent;
