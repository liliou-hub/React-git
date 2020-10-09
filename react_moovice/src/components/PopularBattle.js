import React from 'react';
import Card from './movie/Card'

class PopularBattle extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      currentPage: 1,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e`
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          movies: json.results[0] + json.results[1],
          movies: json.results[(2 * 2), (2 - 1)]

        });
        console.log("ComponentDidMount", json.results[0]);


        // 1 de la page => 1er film & 2eme film
        // (num de la page * 2 => num du 2eme film)
        // (num du 2eme film - 1 => num du 1er film)
      });
  }

  //   currentP(){
  //     let current=this.state.currentPage
  //     // console.log(current); 
  //   }




  render() {
    console.log('alléééé', this.state);
    let current = this.state.movies
    // console.log('gogogogo',current);


    // console.log('goooo', current[1], current[2])


    return (
      <div className="row">

        <Card data={current}
        ></Card>

      </div>
    );
  }
}


export default PopularBattle;