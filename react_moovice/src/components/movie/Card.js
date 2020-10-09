import React from 'react';

class Card extends React.Component {

  render() {
    console.log('ahahaha', this.props);
    return (
      <div className="card col-3" style={{ width: 250 }}>
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w300${this.props.data.poster_path}`}
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title"> {this.props.data.title}</h5>
          <p className="card-text"> {this.props.data.overview}</p>

        </div>
        <p>{this.props.data.current}</p>
      </div>
    );
  }
}
export default Card



