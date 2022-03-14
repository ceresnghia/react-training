import * as React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import ShopThreeColumn from './pages/ShopThreeColumn';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/shop-grid-col-3' />
        </Route>

        <Route path='/shop-grid-col-3' component={ShopThreeColumn} />
      </Switch>
    </Router>
  );
}

export default App;
