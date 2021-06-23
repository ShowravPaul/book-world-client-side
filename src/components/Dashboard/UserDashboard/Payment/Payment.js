import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import UserDashboardMain from '../UserDashboardMain/UserDashboardMain';
import './Payment.css'

const Payment = () => {
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
    if (orders.length < 10 && orders.length > 0) {
        if (orders.length >= 5) shippingCost = 50;
        else shippingCost = 100;
    }

    let totalCost = totalPrice + shippingCost;

    // info form related --------------------
    const { register, handleSubmit, errors } = useForm();

    const [infoOn, setInfoOn] = useState(null);
    const onSubmit = data => {
        setInfoOn(1);
    };

    // const totalBook = orders.length;

    // const history = useHistory();

    const paymentData = (paymentID) => {
        // const data = {
        //     ...loggedInUser,
        //     totalBook,
        //     totalPrice,
        //     data: new Date(),
        //     status: "pending",
        //     paymentID
        // }

        // alert('your payment has been done successfully! :D');
        // history.replace('/home');
    }

    return (
        <>
            <UserDashboardMain></UserDashboardMain>
            <h4 className="text-center">After a successful payment, we will talk to you over the phone within 2 hours.</h4>
        
            {/* taking info here -------------------- */}
            <div className="row order mb-5">
                <div className="col-md-6 p-5 left-part">
                    <h3>Total book: {orders.length}</h3>
                    <br />
                    <h3>Total price: {totalPrice}</h3>
                    <br />
                    <h3>Shipping Cost: {shippingCost}</h3>
                    <br />
                    <h3>Total Cost: {totalCost}</h3>
                </div>
                <div className="col-md-6 p-3 right-part">
                    <div style={{ display: infoOn ? 'none' : 'block' }} className="container center_div">
                        <h4>Submit your information: </h4>
                        <br />
                        <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                            <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                            {errors.name && <span className="error">Name is required</span>}

                            <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                            {errors.email && <span className="error">Email is required</span>}

                            <input name="address" ref={register({ required: true })} placeholder="Your Address" />
                            {errors.address && <span className="error">Address is required</span>}

                            <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
                            {errors.phone && <span className="error">Phone Number is required</span>}

                            <input type="submit" />
                        </form>
                    </div>
                    <div style={{ display: infoOn ? 'block' : 'none' }} className="order">
                        <h3>please pay here:</h3>
                        <br />
                        <ProcessPayment handlePayment={{ paymentData }}></ProcessPayment>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;
