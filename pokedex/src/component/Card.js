import React from 'react';

class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.info.id}></img>
                <p>Name: {this.state.name} </p>
                <p>Height: {this.state.height} m</p>
                <p>Weight: {this.state.weight} Kg</p>
                <p>Type: {this.state.type}</p>

                <Card info={this.state}></Card>

            </div>
        )
    }
}

export default Card