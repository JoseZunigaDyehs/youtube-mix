import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
// import { Route } from "react-router";
import * as actions from "./actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./assets/css/main.scss";

import Pannel from './components/pannel/pannel'


export class Router extends Component {
  getContent() {
    // const { currentUser } = this.props;
    // debugger;
      return (
        <BrowserRouter basename="">
          <Switch>
            <Pannel {...this.props}/>
          </Switch>
        </BrowserRouter>
      );
  }
  render() {
    const content = this.getContent();

    return <React.Fragment>{content}</React.Fragment>;
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Router);
