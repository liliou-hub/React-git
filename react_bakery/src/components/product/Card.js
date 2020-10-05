import React from 'react';
import specimen from '../../img/specimen.jpg'

class Card extends React.Component {

    constructor() {
        super();
        this.state = { /*poser la question, ici pas pareil que dans la doc mais le console.log fonctionne aussi*/
            source: specimen
        }
        // console.log(this.state)
    }

    componentDidMount() {
        const url = `http://konexio.codiscovery.co/bakery/api/?q=${this.props.input}`
        fetch(url)
            .then(res => res.json())
            .then(json => {
                // console.log('resultat fetch', json);
                if (json.success) {
                    this.setState({
                        source: json.source
                    })
                }
            });
    }



    render() {
        return (
            <div >
                <button onClick={()=>this.props.onClickFn(this.props.input, this.props.price)}>
                    <img src={this.state.source}  alt=''></img>
                </button>

            </div>
        )
    }
}

export default Card
