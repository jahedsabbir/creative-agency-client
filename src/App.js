import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import Review from './components/Dashboard/Review/Review';
import AddService from './components/Dashboard/AddService/AddService';
import AllServiceList from './components/Dashboard/AllServiceList/AllServiceList';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute  path="/dashboard">
         <Dashboard></Dashboard>
        </PrivateRoute>
        <Route  path="/login">
         <Login></Login>
        </Route>
        <Route  path="/servicelist">
         <ServiceList></ServiceList>
        </Route>
        <Route  path="/review">
         <Review></Review>
        </Route>
        <Route  path="/makeadmin">
         <MakeAdmin></MakeAdmin>
        </Route>
        <PrivateRoute  path="/allservicelist">
         <AllServiceList></AllServiceList>
        </PrivateRoute>
        <Route  path="/addservice">
         <AddService></AddService>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
