import React, { Component } from 'react';




class Counter extends Component {

    render() {
        return (
            <div>
                <h2>{this.props.count}</h2>        
                <button onClick={this.props.incrementCountFn} style={{background:'green'}}>+</button>  
                <button onClick={this.props.decrementCountFn} style={{background:'red'}}>-</button>   
            </div>
        );
    }
}

export default Counter;
