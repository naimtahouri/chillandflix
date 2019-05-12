import React from 'react';
import Card from '../core/Cards/Card';

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies : [],
            movieLike : [],
        }
    }

    componentDidMount() {
        const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e3d354db0d51107a2f24bc1796fb8017';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log('data fetch :', data);
            this.setState({
                movies : data.results,
            })
            console.log('data fetch :', this.state.movies);
        });
    }


    render() {
        // console.log('state render :', this.state.movies);
        return(
            <div className='row'>
                <div className='d-none d-md-block d-lg-block d-xl-block box-banniere'>
                    <img className='banniere' src='/img/banniere2.jpg' alt='banniere' />
                </div>
                {this.state.movies.map((movie, index) => {
                    return(
                        <Card key={index} movie={movie} />
                    )
                })}
            </div>
        )
    }
}

export default Popular;