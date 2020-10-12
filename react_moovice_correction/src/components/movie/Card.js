import React from 'react';


class Card extends React.Component {

  render() {
      const{
          title,
          overview,
          imgUrl
        
      }=this.props
    
    return (
      <div>
        <img src={imgUrl} alt=""/>
        <h2>{title} </h2>
        <h4>{ overview}</h4>
       
      </div>
    );
  }
}
export default Card