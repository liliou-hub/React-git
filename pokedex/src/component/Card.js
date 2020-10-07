import React from 'react';

class Card extends React.Component {

    render() {
        return (
            <div>
                <img className="card-img-top" src={this.props.id}></img>
                <p>Name: {this.props.name} </p>
                <p>Height: {this.props.height} m</p>
                <p>Weight: {this.props.weight} Kg</p>
                <p>Type: {this.props.type}</p>
            </div>
        )
    }
}

export default Card