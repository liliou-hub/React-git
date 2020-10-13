import React from 'react';
import { API_KEY } from './service/Network'
import placeholder from '../img/placeholder.png'

import Card from './movie/Card'

class MyList extends React.Component {

  constructor() {
    super()


    this.state = {
      movies: [],
      movieIds: getFromLocalStorage()
    }
   console.log('hellooo', movieIds);
  }

  getFromLocalStoraget() {
    let movieIdsList=JSON.parse(localStorage.getItem('my-list'))

    const theList = (ID) =>
      fetch(`http://api.themoviedb.org/3/movie/${ID}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => data);
        console.log('reeeee', theList);

    const promises =movieIdsList.map(ID => theList(ID));

    Promise.all(promises)
      .then((theList) => {

        console.log('heyheyhey', theList)
        console.log('yoooo', theList[0])


      });

    this.setState({
      movies: theList,

    })

  }

  render() {

    //   const {
    //     localStorage:[]
    // } = this.state

    return (
      <div>My list
        <Card></Card>
      </div>
    );
  }
}
export default MyList;



