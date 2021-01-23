import React from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Detail from './pages/Detail';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/detail/:missionId&:launchId" component={Detail} />
    </Router>
  );
};

export default App;
