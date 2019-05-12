import React from 'react';
import CardKids from '../core/Cards/CardKids';

class Kids extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies : [],
        }
    }

    componentDidMount() {
        const url = 'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.descc&api_key=e3d354db0d51107a2f24bc1796fb8017';
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
        return(
            <div className='row'>
                <div className='d-none d-md-block d-lg-block d-md-block d-xl-block box-banniere'>
                    <img className='banniere' src='/img/banniere4.jpg' alt='banniere' />
                </div>
                {this.state.movies.map((movie, index) => {
                    return(
                        <CardKids key={index} movie={movie} />
                    )
                })}
            </div>
        )
    }
}

export default Kids;
