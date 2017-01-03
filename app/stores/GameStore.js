import alt from '../alt';
import GameActions from '../actions/GameActions';

class GameStore {
  constructor() {
    this.bindActions(GameActions);
  }

  onCreateGameSuccess(data) {
    this.room = data.room;
  }
}

export default alt.createStore(GameStore);
