import React from 'react';
import Navbar from './navbar';

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Navbar logout={this.props.logout}/>
        I am the Movies Index.
      </div>
    );
  }
}

export default MoviesIndex;
