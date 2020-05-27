import React from 'react';
import Review from './Review';
import './Reviews.css';
import data from './reviews.json';

export default function StatelessReviews(props) {
    const reviews = data;

    /**
     * @param {number} index 
     */
    const deleteReview = (index) => {
        reviews.splice(index, 1);
        console.log(reviews);
    }

    return (
        <div className="items-container">
            {reviews.map((review, index) =>
                <Review
                    key={index}
                    title={review.title}
                    review={review.review}
                    rating={review.rating}
                    deleteReview={() => deleteReview(index)}
                />
            )}
        </div>
    )
}