import React from 'react';

class Button extends React.Component {

    constructor() {
        super();
        this.click = this.click.bind(this);
    }

    click() {
        console.log('[Button] click')
        // ici on indique à notre composant parent qu'il y eu un clique sur le bouton
        this.props.onClick()
    }

    render() {
        return (
            <button onClick={this.click} className="img-thumbnail">
                {/* <img className='poke' src={`https://pokeres.bastionbot.org/images/pokemon/${this.props.id}.png`}></img> */}
                {this.props.children}</button>
        )
    }
}

export default Button