import React from 'react';

class CardKids extends React.Component {
    render() {
        const urlImgKids = 'https://image.tmdb.org/t/p/w500/';
        const imgProps = this.props.movie.poster_path;
        return(
            <div className='col-12 col-md-6 col-lg-6 box-card'>
            <img className='img-fluid img-movie' src= {urlImgKids + imgProps} alt='img-movie'/>
            <div className='box-title'>
                <h1 style={{
                    fontSize: '40px',
                    fontWeight: 'bold',
                    color: 'red'
                }}>{this.props.movie.title}</h1>
                <h3 style={{
                    fontSize:'20px',
                    color: 'white',
                    fontStyle: 'italic'
                }}>{this.props.movie.overview}</h3>
            </div>
            </div>
        )
    }
}

export default CardKids;