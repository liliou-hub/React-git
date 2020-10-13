import React from 'react';
​
class Quizz extends React.Component {
​
    
    constructor() {
        super();
        this.click = this.click.bind(this);
​
        this.state = {
            list: []
        }
    }
​
    componentDidMount() {
        this.setState({
            list: [1,2,3,4]
        })
    }
   ​
    click() {
        console.log('Je suis clické');
        // il faut que je rajoute un element à ma list
        let myList=  this.state.list
          myList= list.push('ajouté',5)
        
    }


    render() {
        const {
            list
        }=this.state
        return (
            <div>
               {mylist.map((elem)=>{
                  return  <button onClick={this.click}>Button</button>
                   {elem.list}
               })}            
            </div>
        )
    }
​
}
​
export default Quizz




