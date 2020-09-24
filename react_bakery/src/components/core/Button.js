import React, { Component } from 'react';



class Button extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                {this.props.isSelected}
                {this.props.onClick}
            </div>
        );
    }
}

export default Button;