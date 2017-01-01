import React from 'react';
import {Link} from 'react-router';
import {first, without, findWhere} from 'underscore';
import socket from '../socket';
import SketchExample from './SketchExample';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='container'>
        <SketchExample />
      </div>
    );
  }
}

export default Home;
