import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsToggle } from "../../actions";
import "./Navigation.css";

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
        <div className="spacer"></div>
        <img
          className="navButton"
          src="https://image.flaticon.com/icons/svg/32/32213.svg"
          alt="expand button"
        />
        <img
          className="navButton"
          src="https://image.flaticon.com/icons/svg/60/60983.svg"
          alt="work button"
          onClick={this.handleWorkClick}
        />
        <img
          className="navButton"
          src="https://image.flaticon.com/icons/svg/33/33308.svg"
          alt="social button"
          onClick={this.handleSocialClick}
        />
        <img
          className="navButton"
          src="https://image.flaticon.com/icons/svg/2179/2179763.svg"
          alt="hygiene button"
          onClick={this.handleHygieneClick}
        />
        <img
          className="navButton"
          src="https://image.flaticon.com/icons/svg/25/25694.svg"
          alt="home button"
          onClick={this.handleHomeClick}
        />
        <div className="navButton" onClick={this.handleViewAllClick}>
          All
        </div>
      </nav>
    );
  }
}

const mapStateToProps = store => {
  console.log(store.display);
  return {
    display: store.display
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggle: link => {
      console.log("sending click to actions");
      return dispatch(actionsToggle(link));
    }
  };
};

NavigationComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationComponent);

export default NavigationComponent;
