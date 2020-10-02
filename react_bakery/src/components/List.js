import React, { Component } from 'react';


class List extends Component {

    constructor() {
        super();
        this.listToList = this.listToList.bind(this);
    }


    listToList() {

        const listItem = this.props.listItem.map(({ input, price }) => {
            // console.log('heyyyy',input,price);

            return (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    {input}
                    <span className="badge badge-primary badge-pill"> {price}</span>
                </li>
            );
        });


        return (
            <div className="App">
                <ul className="list-group">
                    {listItem}
                </ul>
            </div>
        );
    };

    render() {

        return (
            <div className="App">
                {this.listToList()}
            </div>
        );
    }

}
export default List;

