import React, { Component } from 'react';




class Button extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.props.onClick} >
                     {this.props.children}</button>            
            </div>
        );
    }
}

export default Button;

