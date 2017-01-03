import React from 'react';
import NewGameStore from '../stores/NewGameStore';
import NewGameActions from '../actions/NewGameActions';
import SketchExample from './SketchExample';
import {Link} from 'react-router';

class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = NewGameStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NewGameStore.listen(this.onChange);
    NewGameActions.createGame();
  }

  componentWillUnmount() {
    NewGameStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <SketchExample room={this.state.room} />
      </div>
    )
  }
}

export default NewGame;
