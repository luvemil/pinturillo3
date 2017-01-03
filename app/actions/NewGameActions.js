import alt from '../alt';
import socket from '../socket';

class NewGameActions {
  constructor() {
    this.generateActions(
      'createGameSuccess'
    );
  }

  createGame() {
    var url = '/api/creategame';
    $.ajax({ url: url })
      .done((data) => {
        this.actions.createGameSuccess(data);
        this.actions.bindSocketRoom(data);
      });
  }

  bindSocketRoom(data) {
    socket.emit('bindRoom',data);
  }
}

export default alt.createActions(NewGameActions);
