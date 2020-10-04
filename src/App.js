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
      <Route path='/' exact component={Home} />
      <br />
      <Switch>
      {/* <Route path='/' exact component={Home} /> */}
      <Route path='/send' exact component={Home} />
      <Route path='/home' exact component={Home} />
      <Route path='/graduate' exact component={Home} />
      <Route path='/profile' exact component={Home} />
      <Route path='/messages' exact component={Home} />
      <Route path='/setting' exact component={Home} />
      </Switch>
    </Router>
    </div>
  );
}
}

export default App;
