import React from 'react';
import './Carousel.css'
import pic1 from '../../images/cracking the coding interview.jpg'
import pic2 from '../../images/DSA by Shanto vai.jpg'
import pic3 from '../../images/headFirstJava.jpg'

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide carousel-slide mt-3" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row d-flex align-items-center p-5">
                        <div class="col-md-7">
                            <h1>Cracking the coding interview</h1>
                            <p>This is the most popular interview book for applying a software engineer role! Don't skip it if!</p>
                            <h3>$80</h3>
                            <button class="btn btn-warning">Buy now</button>
                        </div>
                        <div class="col-md-5">
                            <img src={pic1} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row d-flex align-items-center p-5">
                        <div class="col-md-7">
                            <h1>Data Structures and Algorithms</h1>
                            <p>The best book about "Data Structures and Algorithms" in Bangla.</p>
                            <h3>$90</h3>
                            <button class="btn btn-warning">Buy now</button>
                        </div>
                        <div class="col-md-5">
                            <img src={pic2} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row d-flex align-items-center p-5">
                        <div class="col-md-7">
                            <h1>Head First JAVA</h1>
                            <p>Want to learn JAVA in the easiest way?? Order this book today!!</p>
                            <h3>$70</h3>
                            <button class="btn btn-warning">Buy now</button>
                        </div>
                        <div class="col-md-5">
                            <img src={pic3} class="d-block w-100" alt="..." />
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