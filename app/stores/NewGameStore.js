import alt from '../alt';
import NewGameActions from '../actions/NewGameActions';

class NewGameStore {
  constructor() {
    this.bindActions(NewGameActions);
  }

  onCreateGameSuccess(data) {
    this.room = data.room;
  }
}

export default alt.createStore(NewGameStore);
