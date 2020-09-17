import React, { Component } from 'react';


class Title extends Component {
  render() {
    return (
      <div>
     <h1>je test react</h1>
     <code>{this.props.name}</code>
     </div>
    );
  }
}

export default Title;
