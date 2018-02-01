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

          <li className="navbar-left">
              <section><Link to="/browse">
                  <h1 className="site-name" id="site-name-small">BingeFlix</h1>
                  </Link>
              </section>
              <section>
                <NavbarButtons />
              </section>
          </li>

          <li className="navbar-right">
            <section>
              <SearchBarContainer />
            </section>

            <section className="notifications">
              <div className="profile-picture-down-arrow">
                <img className="profile-picture"
                      src="https://assets.nflxext.com/ffe/profiles/avatars_v2/32x32/PICON_025.png"/>

                <span id="down-arrow"> <i className="fas fa-sort-down"></i></span>
              </div>
              <div className="pop-up-notifications">
                <ul>
                  <li className="user-info">
                    <img className="profile-picture"
                          src="https://assets.nflxext.com/ffe/profiles/avatars_v2/32x32/PICON_025.png"/>
                      <span> { this.props.currentUserEmail }</span>
                  </li>
                  <li id="pop-up-logout-btn"
                      onClick={ (e) => this.handleSubmit(e) }>
                    Sign out of Bingeflix
                  </li>

                </ul>
              </div>
            </section>
          </li>

        </ul>
      </div>
    );
  }

}

export default Navbar;
