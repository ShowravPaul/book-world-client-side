import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TakenBookContext, UserContext } from '../../App';
import './CheckOut.css'

const CheckOut = () => {
    const [takenBook, setTakenBook] = useContext(TakenBookContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // these 2 lines are extra, just for using them
    setTakenBook(takenBook);
    setLoggedInUser(loggedInUser);

    const saveOrderData = () => {
        const orderData = { ...loggedInUser, ...takenBook, date: new Date() };
        // console.log(orderData);
        fetch('https://project-3-2-book-world.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
    }
    saveOrderData();

    const history = useHistory();
    const handleBackToHome = () => {
        history.push(`/home`);
    }

    //eikhan theke email, date, price, book 
    return (
        <div>
            <h3 className="success">Successfully added to your cart!!</h3>
            <div className="row checkout">
                <div className="col">
                    <h1>Thanks for buying!</h1>
                    <h4>You have just selected this book: </h4>
                    <p>Book: {takenBook.bookName}</p>
                    <p>Writer: {takenBook.writerName}</p>
                    <p>Price: ${takenBook.price}</p>
                </div>
                <div className="col">
                    <img src={takenBook.imageURL} alt="" />
                </div>
            </div>

            <div style={{ margin: "80px 45%" }}>
                <button onClick={()=>{handleBackToHome()}} className="btn btn-primary">Back to HOME</button>
            </div>
        </div>
    );
};

export default CheckOut;
