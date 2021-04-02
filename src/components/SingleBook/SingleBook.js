import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { TakenBookContext } from '../../App';
import './SingleBook.css'

const SingleBook = ({ book }) => {
    const { bookName, imageURL, writerName, price } = book;
    const [takenBook, setTakenBook] = useContext(TakenBookContext);
    const history = useHistory();

    const handleBuy = (book) => {
        setTakenBook(book);
        history.push(`/checkout`);
    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
                <img src={imageURL} alt="" />
                <div className="card-body">
                    <p><b>{bookName}</b> by {writerName}</p>
                    <p>Price: ${price}</p>
                    <button className="btn btn-primary" onClick={() => handleBuy(book)}> Buy </button>
                </div>
            </div>
        </div>
    );
};
import './SingleBook.css'

export default SingleBook;