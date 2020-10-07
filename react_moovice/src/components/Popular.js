import React from 'react';

class Popular extends React.Component {
    constructor() {
        super()

    }
    state = {
        movie: []
    }

    filmPop() {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=<https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e>`)
          .then(res => res.json())
          .then(json => {
    
            this.setState({
              movie:json.results
            })
            console.log('heyyy',json.results);      
          });
      }


    render() {
        return (
            <div>Popular
            <p>{this.filmPop}</p>
            </div>
        );
    }
}
export default Popular;