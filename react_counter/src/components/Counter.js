import React, { Component } from 'react';


class Counter extends Component {


    render() {
        return (
            <div>
                <h2>{this.props.count}</h2>
                <button onClick={this.props.incrementFn} style={{ backgroundColor: "green" }} > + </button>
                <button onClick={this.props.decrementFn} style={{ backgroundColor: "red" }}> - </button>
            </div>
        );
    }
}

export default Counter;
