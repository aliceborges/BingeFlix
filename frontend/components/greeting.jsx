import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
        &nbsp; &nbsp;
        <Link to="/login">Sign In</Link>
      </div>
    );
  }
}

export default Greeting;
