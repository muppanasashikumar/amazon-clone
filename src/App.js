import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe('pk_test_51IgQNeSGLIP75bnbl8kkpkdnzqDjRfAo1rfvw29vX4gJKZDKiwCmPnjAEau3NXxOHyaqlBZnWoJWYzTVmKh01TiG00qjAiexmr')

function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only runs once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('The user is :' + authUser);

      if(authUser) {
        //the user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
       </div>
    </Router>
    
  );
}

export default App;
