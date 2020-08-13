import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import CountryDetail from './components/countryDetail/CountryDetail';
import CountriesList from './components/countriesList/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <CountriesList className="col-5" />
        <Route
          className="col-7"
          exact
          path="/:cca3"
          component={CountryDetail}
        />
      </div>
    </div>
  );
}

export default App;
