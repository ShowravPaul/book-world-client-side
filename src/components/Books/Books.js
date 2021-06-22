import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleBook from '../SingleBook/SingleBook';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://project-3-2-book-world.herokuapp.com/books')
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h2 style={{margin: "2% 45%"}}>Welcome!</h2>
            <div className="container">
                <div className="row">
                    {
                        books.map(book => <SingleBook key={book._id} book={book} ></SingleBook>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;
