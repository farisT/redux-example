
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { simpleAction } from './actions/simpleAction'
import { textAction } from './actions/textAction'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
   }
   textAction = (event) => {
    this.props.textAction();
   }
 render() {
  return (
   <div className="App">
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
     To get started, edit <code>src/App.js</code> and save to reload
    </p>
    <button onClick={this.simpleAction}>Test redux action</button>
    <button onClick={this.textAction}>Some text fun!</button>
    <pre>
      {
        JSON.stringify(this.props)
      }
      <p>{this.props.textReducer.result}</p>
    </pre>
   </div>
   

  );
 }
}

const mapStateToProps = state => ({
  ...state
 })
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ simpleAction, textAction }, dispatch)
  }
 
 }

 export default connect(mapStateToProps, mapDispatchToProps)(App);