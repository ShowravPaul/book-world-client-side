import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckOut from './components/CheckOut/CheckOut';
import DashboardMain from './components/Dashboard/DashboardMain/DashboardMain';
import OrderList from './components/Dashboard/Adminpanel/OrderList/OrderList';
import MakeAdmin from './components/Dashboard/Adminpanel/MakeAdmin/MakeAdmin';
import ManageBooks from './components/Dashboard/Adminpanel/ManageBooks/ManageBooks';
import AddBook from './components/Dashboard/Adminpanel/AddBook/AddBook';
import MyOrderList from './components/Dashboard/UserDashboard/MyOrderList/MyOrderList';
import GiveReview from './components/Dashboard/UserDashboard/GiveReview/GiveReview';
import Navbar from './components/Navbar/Navbar';
import Books from './components/Books/Books';
import Payment from './components/Dashboard/UserDashboard/Payment/Payment';
import Contact from './components/Contact/Contact';
import OurServices from './components/OurServices/OurServices';

export const UserContext = createContext();
export const TakenBookContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [takenBook, setTakenBook] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <TakenBookContext.Provider value={[takenBook, setTakenBook]}>

        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/dashboard">
              <DashboardMain />
            </Route>
            <Route path="/contact-us">
              <Contact />
            </Route>
            <Route path="/our-services">
              <OurServices />
            </Route>
            
            <PrivateRoute path="/testing">

            </PrivateRoute>

            {/* private route shuru hobe */}
            <Route path="/checkout">
              <CheckOut />
            </Route>
            <Route path="/orderList">
              <OrderList />
            </Route>
            <Route path="/addBook">
              <AddBook />
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin />
            </Route>
            <Route path="/manageBooks">
              <ManageBooks />
            </Route>
            <Route path="/myOrderList">
              <MyOrderList />
            </Route>
            <Route path="/giveReview">
              <GiveReview />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
          </Switch>
        </Router>
      </TakenBookContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
