import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Reader from './Reader/Reader';
import items from './publication.json';

const customHistory = createBrowserHistory();

const App = () => (
  <Router history={customHistory}>
    <Switch>
      <Route path="/reader" render={() => <Reader items={items} />} />
      <Route render={() => <Reader items={items} />} />
    </Switch>
  </Router>
);

export default App;
