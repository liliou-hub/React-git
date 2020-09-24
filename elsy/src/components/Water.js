import React, { Component } from 'react';
import Icon from './core/Icon.js';



class Person extends Component {
    render() {
        return (
            <div className='box col-md-2 col-6'>
                <Icon name='local_drink' color= {'#3A85FF'}/>
                <p>{this.props.water} L</p>    
            </div>
        );
    }
}

export default Person;
