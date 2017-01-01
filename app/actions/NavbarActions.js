import alt from '../alt';

class NavbarActions {
  constructor() {
    this.generateActions(
      'updateOnlineUsers',
    );
  }
}

export default alt.createActions(NavbarActions);
