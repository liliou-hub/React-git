import React, { Component } from 'react';
import Icon from './components/core/Icon.js';



class Person extends Component {
    render() {
        return (
            <div className='box col-md-2 col-6'>
                <Icon name='directions_walk'/>
                {/* <span class="material-icons"  style={{ fontSize: '100', color: 'black' }}>
                directions_walk
                    {this.props.icon} */}
                {/* // </span> */}
            </div>
        );
    }
}

export default Person;
