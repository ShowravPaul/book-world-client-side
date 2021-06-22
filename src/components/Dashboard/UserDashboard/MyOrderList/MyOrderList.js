import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import UserDashboardMain from '../UserDashboardMain/UserDashboardMain';

import './MyOrderList.css'

const MyOrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    setLoggedInUser(loggedInUser); // extra line, just for using it

    useEffect(() => {
        fetch('https://project-3-2-book-world.herokuapp.com/myOrderList?email=' + loggedInUser.email, {
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

    // console.log(orders[0]);

    return (
        <div className="mb-5">
            <UserDashboardMain></UserDashboardMain>

            <div className="totalPrice">
                <h4>Total book: {orders.length}</h4>
                <h4>Total price: {totalPrice}</h4>
                <h4>Shipping Cost: {shippingCost}</h4>
                <h4>Total Cost: {totalCost}</h4>
            </div>

            <div className="container table">
                <h3>Hello, {loggedInUser.name}</h3>
                <h4>You have {orders.length} orders!!</h4>
                <br />
                <table id="myOrderList">
                    <tr>
                        <th>Book Name</th>
                        <th>Writer</th>
                        <th>Price</th>
                        <th>Order date</th>
                        <th>Order Status</th>
                    </tr>
                    {
                        orders.map(order =>
                            <tr>
                                <td>{order.bookName}</td>
                                <td>{order.writerName}</td>
                                <td>${order.price}</td>
                                <td>{new Date(order.date).toDateString('dd/MM/yyyy')}</td>
                                <td>{order.status}</td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default MyOrderList;
