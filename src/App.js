import * as React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import HeaderSection from './layout/HeaderSection';
import ContactSection from './layout/ContactSection';
import FooterSection from './layout/FooterSection';

import ShopThreeColumn from './pages/ShopThreeColumn';

function App() {
  const [email, setEmail] = React.useState('');

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
    console.log('Email Input Changed', email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!regexEmail.test(email)) {
      alert('Please enter a valid email address!');
      return;
    }

    alert('Form submitted!');
    console.log('Form submitted: ', email);
  };

  return (
    <>
      <Router>
        <HeaderSection />

        <main>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/shop-grid-col-3' />
            </Route>

            <Route path='/shop-grid-col-3' component={ShopThreeColumn} />
          </Switch>
        </main>

        <ContactSection
          email={email}
          onEmailInputChange={handleEmailInputChange}
          onFormSubmit={handleFormSubmit}
        />

        <FooterSection />
      </Router>
    </>
  );
}

export default App;
