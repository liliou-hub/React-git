import React from 'react';
import { API_KEY } from './service/Network'
import placeholder from '../img/placeholder.png'

import Card from './movie/Card'
import MyList from './MyList';

class PopularBattle extends React.Component {
    constructor() {
        super()
        this.choseFilm = this.choseFilm.bind(this)
    }

    state = {
        movies: [],
        currentPage: 1
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
                        id: elem.id,
                        title: elem.title,
                        overview: elem.overview,
                        imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path}` : placeholder
                    }
                })
                // console.log('my movies',movies)

                this.setState({ movies })
            })
    }

    choseFilm(id) {
        // console.log('choseFilmid', id);
        /*solution plus longue mais qui fonctionne)*/
        // if (JSON.parse(localStorage.getItem('my-list'))) {
        //     console.log('entréé ici');
        //     myList = JSON.parse(localStorage.getItem('my-list'))
        // }

        let myList = JSON.parse(localStorage.getItem('my-list')) || []

        if (!myList.includes(id)) {
            myList.push(id)
            // console.log('my list', myList);
            localStorage.setItem('my-list', JSON.stringify(myList))
        }


        this.setState({
            currentPage: this.state.currentPage + 1
        })

    }

    render() {
        // console.log('popularbattle render', this.state);


        const {
            movies,
            currentPage
        } = this.state

        const secondIndex = currentPage * 2 - 1
        const firstIndex = secondIndex - 1


        const firstMovie = movies[firstIndex]
        // console.log('firstMovie', firstMovie);

        const secondMovie = movies[secondIndex]
        // console.log('secondMovie', secondMovie);


        return (
            <div className="row">
                <div className="col-6">
                    <button onClick={() => this.choseFilm(firstMovie.id)}>
                        <Card {...firstMovie} />
                    </button>
                    
                </div>
                <div className="col-6">
                    <button onClick={() => this.choseFilm(secondMovie.id)}>
                        <Card {...secondMovie} />
                    </button>
                </div>
                <MyList choseFilm={this.choseFilm}/>
            </div>
        )
    }
}

export default PopularBattle


/*
20 films:
1page => 1er film et 2e film
(num page x2= num du 2e film de chaque bataille)
(num du 1er film =num du 2e film-1)
2=> 3&4
3=> 5&6
.
.
.
10=>19 &20
 */