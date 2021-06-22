import React from 'react';
import './ReviewDetails.css'

const ReviewDetails = ({ review }) => {
    const { name, photoURL, inputReview, numOfStar } = review;

    let stars = [];

    for (let i = 0; i < Math.min(numOfStar, 5); ++i) {
        stars.push(<i className="fa fa-star" key={i}></i>)
    }

    return (
        <div class="col-lg-4 col-md-6 col-sm-12 team-section text-center my-3 reviewDetails">

            <div class="row text-center">
                <div class="col-md-4 mb-md-0 mb-5">
                    <div class="testimonial">
                        <div class="avatar mx-auto">
                            <img src={photoURL} class="rounded-circle z-depth-1 img-fluid" alt="" />
                        </div>
                        <h4 class="font-weight-bold dark-grey-text mt-4">{name}</h4>
                        <p class="font-weight-normal dark-grey-text">
                            <i class="fas fa-quote-left pr-2"></i>
                            {inputReview}
                        </p>
                        <div class="star">
                            {
                                stars
                            }
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ReviewDetails;