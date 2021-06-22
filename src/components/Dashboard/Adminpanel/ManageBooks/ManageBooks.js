import React, { useEffect, useState } from 'react';
import AdminPanelMain from '../AdminPanelMain/AdminPanelMain';
import './ManageBooks.css'

const ManageBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://project-3-2-book-world.herokuapp.com/books')
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [])

    function handleRemove(book) {
        fetch(`https://project-3-2-book-world.herokuapp.com/delete/${book._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('The book has been removed');
                }
            })

        alert('Are you sure to delete this book?');

        let newBooks = [];

        for (let i = 0; i < books.length; i++) {
            const element = books[i];
            if (element._id !== book._id) newBooks.push(element);
        }

        setBooks(newBooks);
    }
    return (
        <>
            <div>
                <AdminPanelMain></AdminPanelMain>
            </div>
            <div className="container table">
                <h4 className="text-center">We have {books.length} books now!!</h4>
                <br />
                <table id="books">
                    <tr>
                        <th>Book Name</th>
                        <th>Writer</th>
                        <th>Price</th>
                    </tr>
                    {
                        books.map(book =>
                            <tr>
                                <td>{book.bookName}</td>
                                <td>{book.writerName}</td>
                                <td>${book.price}</td>
                                <td><button className="btn btn-danger" onClick={() => handleRemove(book)}>Remove</button></td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </>
    );
};

export default ManageBooks;
