import React, { Component } from 'react';


class Title extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.titre}</h1>
        {this.props.name}
      </div>
    );
  }
}

export default Title;
