import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Lists from './components/Lists'
import Image from './components/Image'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Lists} />
          <Route exact path="/image" component={Image} />
        </Switch>
          
      </div>
    </Router>
    
  );
}

export default App;
