import React from 'react';
import Card from './movie/Card'

class PopularBattle extends React.Component {

    constructor() {
        super();

        // this.click = this.click.bind(this);

        this.state = {
            movies: [],
            currentPage: 1
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e`
        )
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    movies: json.results,
                    currentPage:json.results[1]

                });
                console.log("dans componentDidMount", json.results);
            });
    }

    //   click(movies) {
    //     // url corresponds aux informations que nous devons récupérer sur le pokemon selectionner
    //     fetch(movies)
    //       .then(res => res.json())
    //       .then(json => {
    //         // console.log(json)
    //         // nous stokons dans currentPokemon les informations du pokemon selectionner
    //         this.setState({
    //           currentPage: movies
    //         })
    //       })
    //     //   console.log('hahahahahahah',json);
    //   }

    render() {

        return (
            <div className="row">
                {this.state.list.map((currentPage) => (
                    <Card onClick={() => this.click(currentPage)}>
                        <img src={`https://pokeres.bastionbot.org/images/pokemon/${currentPage + 1}.png`}></img>
                    </Card>))

                }
            </div>

        )
    }

}





export default PopularBattle;