import React from 'react';
import { useHistory } from 'react-router';
import './OurServices.css'

const OurServices = () => {
    const history = useHistory();

    const gotoBooks = () => {
        history.push(`/books`);
    }

    return (
        <div className="mb-5">
            <div className="text-center mt-5">
                <h2>OUR SERVICES</h2>
            </div>
            <div className="container our-services row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h3>Buy books from home</h3>
                    <p>[only programming related books are avaiable now]</p>
                    <button className="btn btn-success" onClick={() => gotoBooks()}>See Books about programming</button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h3>Buy science experiment kits</h3>
                    <p>[comming soon...]</p>
                    <button className="btn btn-primary">See some science experiment kit</button>
                </div>
            </div>
        </div>
    );
};

export default OurServices;