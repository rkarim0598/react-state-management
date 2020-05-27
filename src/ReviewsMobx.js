import React from 'react';
import Review from './Review';
import NewReview from './NewReview';
import './Reviews.css';
import { Observer } from 'mobx-react';
import reviewStore from './reviewStore';

export default function ItemsMobx(props) {
    return (
        <Observer>{() =>
            <div className="items-container">
                {reviewStore.reviews.map((review, index) =>
                    <Review
                        key={index}
                        title={review.title}
                        review={review.review}
                        rating={review.rating}
                        deleteReview={() => reviewStore.deleteReview(index)}
                    />
                )}
                <NewReview onSubmit={reviewStore.addReview} />
            </div>
        }
        </Observer>
    )
}