import React from 'react';
import './Carousel.css'
import pic1 from '../../images/cracking the coding interview.jpg'
import pic2 from '../../images/DSA by Shanto vai.jpg'
import pic3 from '../../images/headFirstJava.jpg'
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { TakenBookContext } from '../../App';

const Carousel = () => {
    const books = [
        {
            bookName: "Data Structures and Algorithms",
            writerName: "Md. Mahbubul Hasan Shanto",
            price: 90,
            imageURL: pic2,
            description: "The best book about 'Data Structures and Algorithms' in Bangla."
        },
        {
            bookName: "Cracking the coding interview",
            writerName: "Gayle Laakmann McDowell",
            price: 80,
            imageURL: pic1,
            description: "This is the most popular interview book for applying a software engineer role! Don't skip it!"
        },
        {
            bookName: "Head First JAVA",
            writerName: "Kathy Sierra, Bert Bates",
            price: 70,
            imageURL: pic3,
            description: "Want to learn JAVA in the easiest way?? Order this book today!!"
        }
    ]

    const [takenBook, setTakenBook] = useContext(TakenBookContext);
    setTakenBook(takenBook); // extra line, just for using it

    const history = useHistory();

    const handleBuy = (boughtBook) => {
        setTakenBook(boughtBook);
        history.push(`/checkout`);
    }

    return (
        <div id="carouselExampleIndicators" class="carousel slide carousel-slide mt-3" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row d-flex align-items-center p-5">
                        <div class="col-md-7">
                            <h1>{books[0].bookName}</h1>
                            <p>{books[0].description}</p>
                            <p>Writer: <b>{books[0].writerName}</b></p>
                            <h3>${books[0].price}</h3>
                            <button className="btn btn-warning" onClick={() => handleBuy(books[0])}> Buy now </button>
                        </div>
                        <div class="col-md-5">
                            <img src={books[0].imageURL} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row d-flex align-items-center p-5">
                        <div class="col-md-7">
                            <h1>{books[1].bookName}</h1>
                            <p>{books[1].description}</p>
                            <p>Writer: <b>{books[1].writerName}</b></p>
                            <h3>${books[1].price}</h3>
                            <button className="btn btn-warning" onClick={() => handleBuy(books[1])}> Buy now </button>
                        </div>
                        <div class="col-md-5">
                            <img src={books[1].imageURL} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row d-flex align-items-center p-5">
                        <div class="col-md-7">
                            <h1>{books[2].bookName}</h1>
                            <p>{books[2].description}</p>
                            <p>Writer: <b>{books[2].writerName}</b></p>
                            <h3>${books[2].price}</h3>
                            <button className="btn btn-warning" onClick={() => handleBuy(books[2])}> Buy now </button>
                        </div>
                        <div class="col-md-5">
                            <img src={books[2].imageURL} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Carousel;