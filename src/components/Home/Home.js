import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import ReviewMain from '../Review/ReviewMain/ReviewMain';
import SingleBook from '../SingleBook/SingleBook';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://project-3-2-book-world.herokuapp.com/books')
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [])

    // const book ={
    //     bookName:"Java", 
    //     writerName:"Bojlur Vai",
    //     price:100,
    //     imageURL:"google.com"
    // }

    return (
        <div>
            <div className="container">
                <Carousel></Carousel>
                <div className="row">
                    {
                        books.map(book => <SingleBook key={book._id} book={book} ></SingleBook>)
                    }
                    {/* {
                    <SingleBook book = {book}></SingleBook>
                } */}
                </div>
            </div>
            <ReviewMain></ReviewMain>
            <Footer></Footer>
        </div>
    );
};

export default Home;
