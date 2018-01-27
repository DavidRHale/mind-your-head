import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Tracker from './components/Tracker';
import TrackerInput from './components/TrackerInput';
import Seeder from './components/Seeder';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/tracker" component={ Tracker } />
          <Route path="/tracker/input" component={ TrackerInput } />
          <Route path="/tracker/seed" component={ Seeder } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container-fluid'));
