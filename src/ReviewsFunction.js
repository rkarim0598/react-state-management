import React, { useState } from 'react';
import NewReview from './NewReview';
import './Reviews.css';
import Review from './Review';
import data from './reviews.json';

export default function ReviewsFunction(props) {
    const [reviews, setReviews] = useState(data);

    /**
     * @param {number} index
     */
    const deleteReview = (index) => {
        const newReviews = [...reviews];
        newReviews.splice(index, 1);

        setReviews(newReviews);
    }

    /**
     * @param {{ title: string, review: string, rating: number }} data
     */
    const addReview = (data) => {
        const newReviews = [...reviews];
        newReviews.push(data);
        setReviews(newReviews);
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
            <NewReview onSubmit={addReview} />
        </div>
    )
}