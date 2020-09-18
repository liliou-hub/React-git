import React, { Component } from 'react';



class Icon extends Component {
    render() {
        return (
            <div>
                <span class={this.props.name} style={{ fontSize: '100', color: 'red' }}>       
                </span> 
            </div>
        );
    }
}

export default Icon;
