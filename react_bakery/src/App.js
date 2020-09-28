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
    super();

    this.state = {
      activeTab: 'add',
      items: []
    }

    // this.handleClick = this.handleClick.bind(this)
  }


  // handleClick (activeTab){
  //   this.setState({
  //     activeTab
  //   });
  // }

  onClickTabAdd (activeTab){
    this.setState({
      activeTab:'add'
    });
  }

  onClickTabList(activeTab){
    this.setState({
      activeTab:'list'
    });
  }

  onClickTabPay (activeTab){
    this.setState({
      activeTab:'pay'
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Bakery</h1>
        </div>

        {/* <div className="row justify-content-center">
          <Button onClick={this.handleClick} isSelected={this.isSelected} activeTab={this.state.activeTab} children={['Add']}></Button>
          <Button onClick={this.handleClick} isSelected={this.isSelected} children='List'></Button>
          <Button onClick={this.handleClick} isSelected={this.isSelected} children='Pay'></Button>
        </div> */}
{/* 
        <div className="App btn-group">
          <Button onClick={this.handleClick.bind(this, 'add')}> Add </Button>
          <Button onClick={this.handleClick.bind(this, 'list')}> List </Button> 
          <Button onClick={this.handleClick.bind(this, 'pay')}> Pay </Button>
        </div> */}

        <div className="App btn-group">
          <Button onClick={this.onClickTabAdd .bind(this)}> Add </Button>
          <Button onClick={this.onClickTabList.bind(this)}> List </Button>
          <Button onClick={this. onClickTabPay.bind(this)}> Pay </Button>
        </div>

        {this.state.activeTab === 'add' && <Add />}
        {this.state.activeTab === 'list' && <List />}
        {this.state.activeTab === 'pay' && <Pay />}
      </div>



    );
  }
}

export default App;

