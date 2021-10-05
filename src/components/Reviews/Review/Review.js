import React from 'react';
import './Review.css'

const Review = ({title, text}) => {
    return (
        <div className='review__item'>
            <h4 className="review__item-title title">{title}</h4>
            <p className="review__item-text">{text}</p>
        </div>
    );
}

export default Review;
