import React, { Component } from 'react';
import Card from './product/Card'


class Pay extends Component {
constructor(){
    super()

    this.onClickProduct = this.onClickProduct.bind(this);
}
    state = {
        basket: [],
        total: 0,
        totalVat: 0,
        totalEcoTax: 0
    }

    onClickProduct(name, price) {
        console.log('hhhaaaaaaaaaaaaa',this.setState)
        // console.log('tu as réussi, voici les inputs avec leur prix', name, price);
        return this.setState.basket.map((name, price) => {
        
        })
       
    }

    renderCards() {
        // console.log(this.props)
        return this.props.listItem.map((elem, index) => {

            return <Card
                key={index}
                input={elem.input}
                price={elem.price}
                onClickFn={this.onClickProduct}>
            </Card>

        })
    }

    render() {
        return (
            <div className="App">
                <h1>pay</h1>
                <div>{this.state.total}</div>
                {this.renderCards()}
            </div>
        );
    }
}

export default Pay;