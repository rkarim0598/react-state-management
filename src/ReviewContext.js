import React, { useState } from 'react';
import data from './reviews.json';

// create the context, and initialize to empty
const ReviewContext = React.createContext([{}, () => { }]);

const ReviewProvider = (props) => {
    // initialize provider's state
    const [reviews, setReviews] = useState(data);

    return (
        // provide reviews to children through value prop
        <ReviewContext.Provider value={[reviews, setReviews]}>
            {props.children}
        </ReviewContext.Provider>
    );
}

export { ReviewContext, ReviewProvider };
export default ReviewContext;