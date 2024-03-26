import React from 'react';
import REVIEW_IMGS from '../../reviews';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ReviewSlider() {
    const windowWidth = window.matchMedia('(min-width: 600px)');

    const photoSlideLeft = () => {
        var reviewSlider = document.getElementById('review-slider')
        if (windowWidth.matches) {
            reviewSlider.scrollLeft = reviewSlider.scrollLeft - 500
        } else {
            reviewSlider.scrollLeft = reviewSlider.scrollLeft - 190
        }
    }

    const photoSlideRight = () => {
        var reviewSlider = document.getElementById('review-slider')
        if (windowWidth.matches) {
            reviewSlider.scrollLeft = reviewSlider.scrollLeft + 500
        } else {
            reviewSlider.scrollLeft = reviewSlider.scrollLeft + 190
        }
    }

  return (
    <div className='review-slider-container'>
        <button className="review-arrow" onClick={photoSlideLeft}>
            <ArrowBackIosIcon />
        </button>

        <div id="review-slider" className='review-slider'>
            {REVIEW_IMGS.map((review) => (
                <div className='review-slide' key={review.url}>
                    <img className="review-slide-img" src={review.url} alt={review.alt} />
                    <div className='review-slide-text'>
                        <a className='review-slide-title' href='#'>{review.title}</a>
                        <h3 style={{color: "grey"}}><span style={{fontSize: "12px"}}>By</span> {review.reviewer}</h3>
                    </div>
                </div>
            ))}
        </div>

        <button className="review-arrow" onClick={photoSlideRight}>
            <ArrowForwardIosIcon />
        </button>
      
    </div>
  )
}
