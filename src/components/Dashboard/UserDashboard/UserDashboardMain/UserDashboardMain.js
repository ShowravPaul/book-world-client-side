
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../../App';
import './UserDashboardMain.css'

const UserDashboardMain = () => {
  const history = useHistory();

  // const handleOrder = () => {
  //   history.push(`/order`);
  // }

  const handleMyOrderList = () => {
    history.push(`/myOrderList`);
  }

  const handleGiveReview = () => {
    history.push(`/giveReview`);
  }
  
  const handlePayment = () => {
    history.push(`/payment`);
  }


  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  setLoggedInUser(loggedInUser); // just for using it

  return (
    <div className="mb-5">
      <div className="text-center mt-5">
        <h2>Hello {loggedInUser.name}!</h2>
      </div>
      <div className="container user-dashboard row">
        {/* <div className="col-sm-12 col-md-6 col-lg-3">
          <button className="btn btn-success" onClick={() => handleOrder()}>Order</button>
        </div> */}
        <div className="col-sm-12 col-md-6 col-lg-3">
          <button className="btn btn-primary" onClick={() => handleMyOrderList()}>My Order List</button>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <button className="btn btn-success" onClick={() => handleGiveReview()}>Give a review</button>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <button className="btn btn-primary" onClick={() => handlePayment()}>Payment</button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardMain;
