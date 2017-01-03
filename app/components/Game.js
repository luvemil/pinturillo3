import React from 'react';
// import GameStore from '../stores/GameStore';
// import GameActions from '../actions/GameActions';
import SketchExample from './SketchExample';
import {Link} from 'react-router';
import socket from '../socket';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    socket.emit('bindRoom',{room: this.props.params.room});
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <SketchExample room={this.props.params.room} />
      </div>
    )
  }
}

export default Game;
