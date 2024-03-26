import React from 'react';
import newsImgs from '../newsImgs';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function NewsCarousel() {

  const slideLeft = () => {
    var slider = document.getElementById('news-slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
      var slider = document.getElementById('news-slider')
      slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div className='news-carousel'>
      <button className="carousel-arrow" onClick={slideLeft}>
        <ArrowBackIosIcon />
      </button>

    <div id="news-slider" className='news-slider'>
      {newsImgs.map((image) => (
          <div className='news-box'>
              <a href="/NewsDetail"><img className="news-img" src={image.url} alt={image.alt} key={image.url}/></a>
              <div className='news-text'>
                <a href='/NewsDetail'>{image.title}</a>
                <p>{image.desc}</p>
              </div>
          </div>
      ))}
    </div>

    <button className="carousel-arrow" onClick={slideRight}>
      <ArrowForwardIosIcon />
    </button>
      
    </div>
  )
}
