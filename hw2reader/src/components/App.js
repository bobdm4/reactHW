import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Reader from './Reader/Reader';
import items from './publication.json';

const customHistory = createBrowserHistory();

const App = () => (
  <Switch>
    <Router history={customHistory}>
      <Route path="/reader" render={() => <Reader items={items} />} />
      <Route path="*" render={() => <Reader items={items} />} />
    </Router>
  </Switch>
);

export default App;
