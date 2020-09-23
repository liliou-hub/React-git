import React, { Component } from 'react';
import Icon from './core/Icon.js';



class Person extends Component {
    render() {
        return (
            <div className='box col-md-2 col-6'>
                <Icon name='directions_walk' color= {'black'}/>
                <p>{this.props.steps} steps</p>    
            </div>
        );
    }
}

export default Person;
