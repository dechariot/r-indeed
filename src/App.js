import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//IMPORT PAGES TO APP.JS
import HomePage from "./pages/HomePage";
import CandidatesPage from "./pages/CandidatesPage";
import CandidatePage from "./pages/CandidatePage";
import CompanyPage from './pages/CompanyPage';

function App() {
  return (
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/candidates" exact component={CandidatesPage} />
        <Route path="/company" exact component={CompanyPage} />
        <Route path="/candidates/:id/" component={CandidatePage} />
      </Router>
    );
}

export default App;
