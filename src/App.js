import React, { useEffect } from 'react';
import Styles from './App.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header/Header';
import LogoAmazon from './LogoAmazon/LogoAmazon';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { auth } from './firebase.js';
import { useStateValue } from './StateProvider/StateProvider';

function App() {

  
  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      
      if (authUser){
        return dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        return dispatch({
          type: 'SET_USER',
          user: null,
          basket: []
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className={Styles.App}>
      <Router>
        <Switch>
          <Route path='/login'>
            <LogoAmazon style={{backgroundColor: '#131921'}} />
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
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

export default App;
