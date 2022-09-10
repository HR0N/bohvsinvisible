import './App.scss';
import {connect} from "react-redux";
import React, {Component} from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";

import ivankillson from "./img/ivankillson.jpg";


class App extends Component{

  componentDidMount() {
  }

  state = {
  };


  render() {
    return (
        <div className={'App'}>
          {/*<Header/>*/}
          <Routes>
            <Route exact={true} path={'/'} element={<Home/>}/>
            <Route exact={true} path={'/auth'} element={<Auth/>}/>
          </Routes>
        </div>
    );
  }
}


function mapStateToProps() {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
