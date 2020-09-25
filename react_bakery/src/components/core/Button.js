import React, { Component } from 'react';




class Button extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary"  onClick={this.props.handleClick} isSelected={this.props.isSelected}> {this.props.children}</button>            
            </div>
        );
    }
}

export default Button;

