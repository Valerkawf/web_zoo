//import React from "react";
//import { Container, Row, Col, Card, Button,Header,Slider,Jumbotron} from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header";
import Jumbotron from "./Components/Jumbotron";
import Cards from "./Components/Cards";
import BigBoard from "./Components/BigBoard";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AnimalCards from "./Components/AnimalCards";
import JumbotronAnimals from "./Components/JumbotronAnimals";

function App() {
  return (
      <Router>
        <Switch>
        <Route path="/animals">
          <Footer/>
            <Header />
            <JumbotronAnimals />
            <AnimalCards /> 
          </Route>
          <Route path="*">
            <Header />  
            <Jumbotron />
            <BigBoard />
            <Cards />
          </Route>
        </Switch>
      </Router>
  );
}
export default App;
