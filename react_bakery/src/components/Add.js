import React, { Component } from 'react';
import Button from './core/Button'
import RCSlider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css'
import List from './List';


const PriceMax = 10
const PriceMin = 1

class Add extends Component {

  constructor() {
    super();
    this.state = {
      input: ' ',
      price: 1
    };

    this.updateInput = this.updateInput.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateInput(event) {

    
 this.setState({
      input: event.target.value
    });
    //  console.log(event.target.value)
    
  }

  updatePrice(val) {

   
    this.setState({
      price: val
    });
    // console.log(val)
   
  }

  submitForm() {

    let newForm = this.state.input + ' ' + this.state.price
    console.log(newForm)

    let callBack=this.props.callBack
    console.log(callBack)

    let currentInput=this.state.input
    console.log(currentInput)

    let currentPrice=this.state.price
    console.log(currentPrice)

    let concat=currentInput+currentPrice
    // console.log(concat)
  }




  render() {
    return (
      <div className="App">
        <form onClick={()=>this.submitForm()}>
          <label>
            <input type="text" name='Add' input={this.state.input} onChange={this.updateInput} />

          </label>
          <input type="submit" className='btn btn-primary' value="Add" />
        </form>

        <RCSlider min={PriceMin}
          max={PriceMax}
          onChange={this.updatePrice}
          price={this.props.price}
        >{this.state.price}€</RCSlider>
        

      </div>

    );


  }
}

export default Add;
