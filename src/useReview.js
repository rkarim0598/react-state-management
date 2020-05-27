import { useContext } from 'react';
import { ReviewContext } from "./ReviewContext";

// custom hook
const useReview = () => {
    // get the review context
    // gives us the ability to alter the context data
    const [reviews, setReviews] = useContext(ReviewContext);

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

    // make these available to components that import the hook
    return {
        reviews, // contains the reviews data
        deleteReview, // ability to delete a review
        addReview // ability to add a review
    }
};

export default useReview;