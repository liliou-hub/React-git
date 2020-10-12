import React from 'react';
import { API_KEY } from './service/Network'
import placeholder from '../img/placeholder.png'

import Card from './movie/Card'

class PopularBattle extends React.Component {
    
 state = {
        movies: []
    }

    componentDidMount() {
        // console.log(API_KEY);
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(json => {
                // console.log(json);
                // console.log('Popular.js json.results typeof',typeof json.results);

                const movies = json.results.map((elem) => {
                    // console.log('my elem',elem);
                    // console.log('my return', {
                    //     title:elem.title,
                    //     overview:elem.overview,
                    //     imgUrl:`https://image.tmdb.org/t/p/w300/${elem.poster_path}`
                    // });
                    return {
                        title: elem.title,
                        overview: elem.overview,
                        imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path}` : placeholder

                    }

                })
                // console.log('my movies',movies)

                this.setState({ movies })
            })
    }

    render() {

      console.log('popularbattle render', this.state);
       
      const firstMovie=this.state.movies[0]
      console.log('firstMovie', firstMovie);

      return (
        <div> 
          <Card {...firstMovie}/>
          
           </div>
       
        )
    }
}

 export default PopularBattle