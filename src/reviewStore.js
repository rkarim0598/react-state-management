import { observable, action, decorate } from 'mobx';
import data from './reviews.json';

class reviewStore {
    reviews = data;

    /**
     * @param {{ title: string, review: string, rating: number }} data
     */
    addReview = (data) => {
        const newReviews = [...this.reviews];
        newReviews.push(data);
        this.reviews = newReviews;
    }

    /**
     * remove the index-th entry from reviews
     * @param {number} index
     */
    deleteReview = (index) => {
        const newReviews = [...this.reviews];
        newReviews.splice(index, 1);
        this.reviews = newReviews;
    }
}

decorate(reviewStore, {
    reviews: observable, // observables are data
    addReview: action, // actions manipulate observables
    deleteReview: action
})

const store = new reviewStore();
export default store;
