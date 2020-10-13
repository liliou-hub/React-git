import React from 'react';


class Card extends React.Component {

  render() {
    const {
      title,
      overview,
      imgUrl,
      id

    } = this.props

    return (
      <div>

        <img src={imgUrl} alt="" />
        <h2>{title} </h2>
        <h4>{overview}</h4>
        <h5>{id}</h5>
      </div>
    );
  }
}
export default Card