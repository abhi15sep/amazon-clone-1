import React, { Component } from 'react';
import Styles from './App.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header/Header';
import LogoAmazon from './LogoAmazon/LogoAmazon';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <div className={Styles.App}>
        <Router>
          <Switch>
            <Route path='/login'>
              <LogoAmazon style={{backgroundColor: '#131921', padding: '20px'}} />
              <h1>login</h1>
            </Route>
            <Route path='/checkout'>
              <Header />
              <h1>checkout</h1>
            </Route>
            <Route path='/'>
              <Header />
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
