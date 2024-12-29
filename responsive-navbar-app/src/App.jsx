import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Profile from "./pages/Profile";
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;