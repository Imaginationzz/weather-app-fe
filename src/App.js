import React from "react";

import CitySelector from "./components/CitySelector";
import loginComponent from "./components/loginComponent";
import { Container } from "react-bootstrap";
import "./App.css";
import {BrowserRouter as Router,Route } from "react-router-dom";
  

const App = () => {
  return (
    <Container className="App">
      <Router>
      <Route exact path="/weather" component={CitySelector} />
      <Route exact path="/" component={loginComponent} />
      
      
      </Router>
    </Container>
  );
};

export default App;
