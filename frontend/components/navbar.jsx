import React from 'react';
import NavbarButtons from './navbar_buttons';
import { Link } from 'react-router-dom';
import SearchBarContainer from './search_bar_container';


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
      <div className="navbar-container">
        <ul className="home-navbar">
          <li><Link to="/browse">
              <h1 className="site-name" id="site-name-small">BingeFlix</h1>
              </Link>
          </li>
          <li>
            <NavbarButtons />
          </li>
          <li>
            <SearchBarContainer />
          </li>

          <li><button className="logout-button"
            onClick={ (e) => this.handleSubmit(e) }>Logout</button>
          </li>
        </ul>
      </div>
    );
  }

}

export default Navbar;
