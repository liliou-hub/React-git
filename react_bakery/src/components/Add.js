import React, { Component } from 'react';
import Button from './core/Button'
import RCSlider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css'



const PriceMax = 10
const PriceMin = 1

class Add extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
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
    // console.log(event.target.value)
  }

  updatePrice(val) {

    this.setState({
      price: val
    });
    // console.log(val)
  }

  submitForm() {

    // let newForm = this.state.input + ' ' + this.state.price + '€'
    console.log('je passe par submitForm')
    this.props.addItem(this.state.input, this.state.price)

  }

  render() {
    return (
      <div className="App">
        <div>
          <label>
            <input type="text" name='Add' onChange={this.updateInput} />
          </label>
          <input type="submit" className='btn btn-primary' value="Add" onClick={() => this.submitForm()} />
        </div>

        <RCSlider min={PriceMin}
          max={PriceMax}
          onChange={this.updatePrice}
        // value={this.state.price}
        ></RCSlider>
        {this.state.price + '€'}
      </div>

    );


  }
}

export default Add;
