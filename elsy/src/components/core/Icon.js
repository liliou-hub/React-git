import React, { Component } from 'react';



class Icon extends Component {
    render() {
        return (
            <div>
                <span className="material-icons" style={{ fontSize:100, color:this.props.color}} >                
                {this.props.name}  
                

                </span> 
            </div>
        );
    }
}

export default Icon;
