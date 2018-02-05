import React from 'react';

const ExpandingBlock = ({ movie }) => {

  return(
    <div id={"expanding-block" + movie.id}>
      Hello.
    </div>
  );
};

export default ExpandingBlock;
