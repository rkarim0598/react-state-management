import React, { Component } from 'react';
import Review from './Review';
import NewReview from './NewReview';
import './Reviews.css';
import data from './reviews.json';

export default class ReviewsClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: data
        }
    }

    /**
     * @param {number} index
     */
    deleteReview = (index) => {
        /* the BAD BAD BAD WAY */
        this.state.reviews.splice(index, 1);

        /* the sane way */
        // const newReviews = [...this.state.reviews];
        // newReviews.splice(index, 1);

        // this.setState({ reviews: newReviews });

        console.log(this.state.reviews);
    }

    /**
     * @param {{ title: string, review: string, rating: number }} data
     */
    addReview = (data) => {
        /* the BAD BAD BAD WAY */
        this.state.reviews.push(data);

        /* the sane way */
        // const newReviews = [...this.state.reviews];
        // newReviews.push(data);
        // this.setState({ reviews: newReviews });
    }

    render() {
        return (
            <div className="items-container">
                {this.state.reviews.map((review, index) =>
                    <Review
                        key={index}
                        title={review.title}
                        review={review.review}
                        rating={review.rating}
                        deleteReview={() => this.deleteReview(index)}
                    />
                )}
                <NewReview onSubmit={this.addReview} />
            </div>
        )
    }
}