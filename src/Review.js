import React from 'react';
import './Reviews.css';

export default function Review(props) {
    return (
        <div className="action-container">
            <div className="item-container">
                <div className='left-container'>
                    <h3 style={{ margin: 0 }}><i>{props.title}</i></h3>
                    <p style={{ margin: 0 }}>{props.review}</p>
                </div>
                <div className='right-container'>
                    <p style={{ margin: 0 }}>{props.rating}</p>
                </div>
            </div>
            <div className="delete-container">
                <button onClick={props.deleteReview} className="delete-button">Delete</button>
            </div>
        </div>
    )
}