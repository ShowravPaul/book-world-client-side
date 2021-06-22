import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../../App';
import UserDashboardMain from '../UserDashboardMain/UserDashboardMain';

const Payment = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    setLoggedInUser(loggedInUser); // extra line, just for using it

    useEffect(() => {
        fetch('http://localhost:5000/myOrderList?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [loggedInUser.email])

    let totalPrice = 0;
    orders.forEach(order => {
        const x = parseInt(order.price);
        totalPrice += x;
    });

    let shippingCost = 0;
    if (orders.length < 10) {
        if (orders.length >= 5) shippingCost = 50;
        else shippingCost = 100;
    }

    let totalCost = totalPrice + shippingCost;
    return (
        <div>
            <UserDashboardMain></UserDashboardMain>
            <div className="totalPrice">
                <h4>Total book: {orders.length}</h4>
                <h4>Total price: {totalPrice}</h4>
                <h4>Shipping Cost: {shippingCost}</h4>
                <h4>Total Cost: {totalCost}</h4>
            </div>
        </div>
    );
};

export default Payment;