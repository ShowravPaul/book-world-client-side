import React, { useEffect, useState } from 'react';
import AdminPanelMain from '../AdminPanelMain/AdminPanelMain';
import './OrderList.css'

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://project-3-2-book-world.herokuapp.com/orders')
            .then(response => response.json())
            .then(data => setOrders(data))
    }, [])

    const handleDone = (order) =>{
        order.status = "done";
        let newOrders = [];

        orders.forEach(element => {
            if(order._id !== element._id) newOrders.push(element);
        });

        newOrders.push(order);

        setOrders(newOrders);
    }

    const handleOnGoing = (order) =>{
        order.status = "on going";
        setOrders(orders);
    }

    return (
        <>
        <div>
            <AdminPanelMain></AdminPanelMain>
        </div>
        <div className="container table">
            <h4 className="text-center">Total {orders.length} orders now!!</h4>
            <br />
            <table id="orders">
                <tr>
                    <th>Person name</th>
                    <th>Email</th>
                    <th>Book name</th>
                    <th>Writer name</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Order Status</th>
                </tr>
                {
                    orders.map(order =>
                        <tr>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.bookName}</td>
                            <td>{order.writerName}</td>
                            <td>${order.price}</td>
                            <td>{new Date(order.data).toDateString('dd/MM/yyyy')}</td>
                            <td>{order.status}</td>
                            <td><button onClick={()=>handleDone(order)} className="btn btn-success">Done</button></td>
                            <td><button onClick={()=>handleOnGoing(order)} className="btn btn-info">On going</button></td>
                        </tr>
                    )
                }
            </table>
        </div>
    </>
    );
};

export default OrderList;
