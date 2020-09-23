import React, { Component } from 'react';
import Icon from './core/Icon.js';
import Sliders from './core/Sliders.js';



class HeartRate extends Component {
    render() {
        return (
            <div className='box col-md-2 col-6'>
                <Icon name='favorite' color={'red'}/>
                <p>{this.props.heart} BPM</p>
               <Sliders   max={this.props.max}
                          min={this.props.min}
                          onChange={this.props.onChange}
                          value={this.props.heart}>
                </Sliders>  
            </div>
        );
    }
}

export default HeartRate;
