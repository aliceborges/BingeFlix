import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  title() {
    return (
      <Link to="/"><h1 className="site-name">BingeFlix</h1></Link>
    );
  }


  render() {

    if(this.props.loggedIn){
      return(
        <div className="login-home">
          <div className="inner-page">
            <ul className="home-navbar">
              <li>{ this.title() }</li>
              <li><button className="logout-button" onClick={ (e) => this.handleSubmit(e) }>Logout</button></li>
            </ul>
            <h2>Welcome, {this.props.currentUser.email}</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="home-page">
          <div className="inner-page">
            <ul className="home-navbar">
              <li>{ this.title() }</li>
              <li><Link className="login-button" to="/login">Sign In</Link></li>
            </ul>

            <h1 className="splash-title">See what's next.</h1>
            <h2 className="splash-subtitle">WATCH ANYWHERE. CANCEL ANYTIME.</h2>
            <Link className="signup-button" to="/signup">Sign Up</Link>
          </div>
        </div>
      );
    }
  }

}

export default Greeting;
