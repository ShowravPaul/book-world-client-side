import React from 'react';
import { useHistory } from 'react-router';
import './OurServices.css'

const OurServices = () => {
    const history = useHistory();

    const gotoBooks = () => {
        history.push(`/books`);
    }

    const gotoScienceKit = () => {
        history.push(`/books`);
    }

    return (
        <div className="mb-5">
            <div className="text-center mt-5">
                <h2>OUR SERVICES</h2>
            </div>
            <div className="container our-services row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h3>Buy books online</h3>
                    <button className="btn btn-success" onClick={() => gotoBooks()}>See Books</button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h3>Buy science experiment kits</h3>
                    <button className="btn btn-primary" onClick={() => gotoScienceKit()}>Science experiment kit</button>
                </div>
            </div>
        </div>
    );
};

export default OurServices;