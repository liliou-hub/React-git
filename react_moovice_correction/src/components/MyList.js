import React from 'react';
import { API_KEY } from './service/Network'
import placeholder from '../img/placeholder.png'

import Card from './movie/Card'

class MyList extends React.Component {

  constructor() {
    super()

    this.getFromLocalStorage = this.getFromLocalStorage.bind(this)

    this.state = {
      // localStorage: [],
      movies: [],
      // movieIds: this.getFromLocalStorage()
    }
    // console.log('youhouuu', localStorage);
  }

  getFromLocalStorage(myList) {
    // console.log(myList);   /*ne fonctionne pas*/

    let newMyList = this.props.choseFilm;
    newMyList.push(myList);
    // console.log('my new list', newMyList);   /*ne fonctionne pas*/

    this.setState({
      localStorage: newMyList,
    });

    
    console.log('storage', this.state.localStorage);
  }

  // componentDidUpdate(){
  //   let movies = [];

  
  // let fetchMovies = (movies) => 
  //   fetch(`http://api.themoviedb.org/3/movie/${elem.id}?api_key=${API_KEY}`)
  //   .then(res => res.json())
  //   .then(data => data[0]); 
  // let promises = movies.map(movies => fetchMovies(movies));
  
  
  // Promise.all(promises)
  //   .then((movies) => {
      
  //     console.log('countries[0].capital', movies[0]);
  //     console.log('countries[1].capital', movies[1]);
  //   });

  // }
  

  render() {

    //   const {
    //     localStorage:[]
    // } = this.state

    return (
      <div>My list</div>
    );
  }
}
export default MyList;



