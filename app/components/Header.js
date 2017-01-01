import React from 'react';
import {Link} from 'react-router';
import {first, without, findWhere} from 'underscore';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="jumbotron">
        <div className="container">
          <h1 className="text-center">
            Sync Player
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;
