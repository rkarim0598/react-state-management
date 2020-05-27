import React from 'react';
import ReviewContext from './ReviewContext';
import Review from './Review';
import NewReview from './NewReview';
import useReview from './useReview';

export default function ReviewsWithContext(props) {
    // get the reviews, ability to delete, ability to add
    const { reviews, deleteReview, addReview } = useReview(ReviewContext);

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