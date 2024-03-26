import React, { useState } from 'react';

const ReviewIndicatorBar = ({ aspect, rating }) => {
    const maxRating = 5; // Maximum rating
    const percentage = (rating / maxRating) * 100; // Calculate the percentage based on the rating
  
    return (
      <div className="review-indicator-bar">
        <div className="aspect">{aspect}</div>
        <div className="bar-container">
          <div className="bar" style={{ width: `${percentage}%` }}></div>
        </div>
        <div className="rating">{rating}/{maxRating}</div>
      </div>
    );
  };

export default function Indicator() {
    const reviewData = [
        { aspect: 'Quality', rating: 5.0 },
        { aspect: 'Taste', rating: 4.9 },
        { aspect: 'Delivery', rating: 4.5 },
        // Add more aspects and ratings as needed
      ];
    
      return (
        <div className="review">
          {/* <h1>Reviews</h1> */}
          {reviewData.map((review, index) => (
            <ReviewIndicatorBar 
            key={index} 
            aspect={review.aspect} 
            rating={review.rating} 
            />
          ))}
        </div>
      );
    };