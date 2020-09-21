import React, { Component } from 'react';




class Counter extends Component {

    componentDidMount(){
        
    }

    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                {this.props.incrementFn}
                {this.props.decrementFn}     
            </div>
        );
    }
}

export default Counter;
