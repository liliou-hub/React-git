import React from 'react';
import Card from './movie/Card'

class Popular extends React.Component {
    constructor() {
        super()
        this.state = {
            movie: []
        }
    }


    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e`)
            .then(res => res.json())
            .then(json => {

                this.setState({
                    movie: json.results
                })
                console.log('heyyy', json.results);
            });
    }


    render() {

        return (
            <div >Popular
                
                { this.state.movie.map(() => <Card/>)};
               
            </div>
        );
    }
}
export default Popular;