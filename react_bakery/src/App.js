import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pay from './components/Pay'
import Add from './components/Add'
import List from './components/List'
import Button from './components/core/Button'

class App extends Component {

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this) 

    this.state = {
      activeTab:Add,
      items:[]
    }
  }

  handleClick(Add){
    this.setState({
      activeTab:Add
    })
  

  }


  render() {
    return (
      <div className="App">
       <Add></Add>
       <Pay></Pay>
       <List></List>   
       <div className="row justify-content-center">
       <Button onClick ={this.handleClick}  isSelected={this.state.isSelected} children='Add'/>
       <Button onClick={this.handleClick}  isSelected={this.state.isSelected} children='List'/>
       <Button onClick={this.handleClick} isSelected={this.state.isSelected}  children='Pay'/>
       </div>
       
      </div>



    );
  }
}

export default App;

