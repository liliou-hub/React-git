import React, { Component } from 'react';



class Person extends Component {
    render() {
        return (
            <div className='box col-md-2 col-6'>
                <span class="material-icons" style={{ fontSize: '100', color: 'Black' }}>
                {/* directions_walk */}
                    {this.props.icon}
                </span>
            </div>
        );
    }
}

export default Person;
