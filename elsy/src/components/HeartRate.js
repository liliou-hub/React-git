import React, { Component } from 'react';
import Icon from './components/core/Icon.js';



class HeartRate extends Component {
    render() {
        return (
            <div className='box col-md-2 col-6' >
                <Icon name='favorite'/>
                {/* <span class="material-icons" style={{ fontSize: '100', color: 'red' }}>
                    favorite
                </span>
                <p>{this.props.heart}</p>    */}
            </div>
        );
    }
}

export default HeartRate;
