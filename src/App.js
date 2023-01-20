import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FormExample from './Form';
import Header from './Header';

function App() {
  return (
    <Router>
      <nav className='nav'>
      <div>
        <Link to="/">Ana Sayfa</Link>
        <Route exact path="/">
          Ana Sayfadasın
        </Route>
        <Link to="/form">Form</Link>
        <Route path="/form" component={FormExample}>
        <FormExample/>
        <Header />
        </Route>
        <div>
         
        </div>
      </div>
      </nav>
    </Router>
  );
}
export default App;
