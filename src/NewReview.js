import React, { useRef } from 'react';

export default function NewReview(props) {
    const titleRef = useRef();
    const reviewRef = useRef();
    const ratingRef = useRef();

    const onSubmit = () => {
        // get the values from the refs
        const data = {
            title: titleRef.current.value,
            review: reviewRef.current.value,
            rating: ratingRef.current.value
        }

        // reset the values
        titleRef.current.value = '';
        reviewRef.current.value = '';
        ratingRef.current.value = '';

        // add the values to the reviews list
        props.onSubmit(data);
    }
    return (
        <div>
            <input ref={titleRef} type='text' placeholder='title'></input>
            <input ref={reviewRef} type='text' placeholder='review'></input>
            <input ref={ratingRef} type='number' placeholder='rating (1-5)' min='1' max='5'></input>
            <button onClick={onSubmit}>Add Review</button>
        </div>
    )
}