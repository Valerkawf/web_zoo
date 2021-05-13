import "./App.css";
import Jumbotron from "./Components/Jumbotron";
import BigBoard from "./Components/BigBoard";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnimalCards from "./Components/AnimalCards";
import JumbotronAnimals from "./Components/JumbotronAnimals";
import Team from "./Components/Team";
import MainHeader from "./Components/MainHeader";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/team">
          <MainHeader />
          <Team />
        </Route>
        <Route path="/animals">
          <MainHeader />
          <JumbotronAnimals />
          <AnimalCards />
          <Footer />
        </Route>
        <Route path="*">
          <MainHeader />
          <Jumbotron />
          <BigBoard />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
