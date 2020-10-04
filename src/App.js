import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Navbar from './components/sidebar';


class App extends Component{
 

  render()
  {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <br />
      <Switch>
      <Route exact path='/clinikAssign/'  component={Home} />
      <Route path='/clinikAssign/home'  component={Home} />
      <Route path='/clinikAssign/send'  component={Home} />
      <Route path='/clinikAssign/graduate'  component={Home} />
      <Route path='/clinikAssign/profile'  component={Home} />
      <Route path='/clinikAssign/messages'  component={Home} />
      <Route path='/clinikAssign/setting'  component={Home} />
      </Switch>
    </Router>
    </div>
  );
}
}

export default App;
