import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import NewGame from './components/NewGame';
import Game from './components/Game';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/newgame' component={NewGame} />
    <Route path='/join/:room' component={Game} />
  </Route>
);
