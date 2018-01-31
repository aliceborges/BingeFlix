import React from 'react';
import NavbarButtonsContainer from './navbar_buttons_container';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <div>
        <ul className="home-navbar">
          <li><Link to="/browse">
              <h1 className="site-name">BingeFlix</h1>
              </Link>
          </li>
          <li><button className="logout-button"
            onClick={ (e) => this.handleSubmit(e) }>Logout</button>
          </li>
          <NavbarButtonsContainer />
        </ul>
      </div>
    );
  }

}

export default Navbar;
