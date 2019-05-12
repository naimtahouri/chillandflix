import React from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends React.Component {
    render() {
        return(
            <div className='nav-bar'>
                <div className='box-logo-netflix'>
                    <img className='img-fluid logo-netflix' src='/img/netflixlogo.png' alt='logo-netflix'/>
                </div>
                    <NavLink to="/"><h2 className='link-item'>Home</h2></NavLink>
                    <NavLink to="/Popular"><h2 className='link-item'>Découvrir</h2></NavLink>
                    <NavLink to="/List"><h2 className='link-item'>Vos favoris</h2></NavLink>
                    <NavLink to="/Kids"><h2 className='link-item'>Kids</h2></NavLink>
            </div>
        )
    }
}

export default Nav;