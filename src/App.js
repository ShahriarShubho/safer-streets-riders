import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import NotFound from "./components/NotFound/NotFound";
import RideInfo from "./components/RideInfo/RideInfo";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Destination from "./components/Destination/Destination";
import Footer from "./components/Footer/Footer";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header/>
      {/* <h1>name {loggedInUser.name}</h1> */}
       <Switch>
       <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <LogIn/>
          </Route>
          <PrivateRoute path="/name/:rideType">
           <RideInfo/>
          </PrivateRoute>
          <PrivateRoute path="/destination">
           <Destination/>
          </PrivateRoute>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
