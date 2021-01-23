import React from 'react';

import { Route, HashRouter as Router } from 'react-router-dom';

import Detail from './pages/Detail';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Router>
  );
};

export default App;
