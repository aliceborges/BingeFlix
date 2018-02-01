import React from 'react';
import { Link } from 'react-router-dom';

const NavbarButtons = props => {

  return(
    <ul className="navbar-buttons">
      <li>
        <Link to="/browse">Home</Link>
      </li>

      <li>
        <Link to="/browse/tv">TV Shows</Link>
      </li>

      <li>
        <Link to="/browse/movies">Movies</Link>

      </li>

      <li>
        <Link to="/browse/originals">Originals</Link>
      </li>

      <li>
        <Link to="/browse/my-list">My List</Link>
      </li>

    </ul>
  );
};

export default NavbarButtons;
