import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import smoothie1 from "../../slides/smoothie1.png";
import smoothie2 from "../../slides/smoothie2.png";
import smoothie3 from "../../slides/smoothie3.png";

const IMAGES = [ 
    {
        url: smoothie1, 
        alt: "Purple smoothie",
        title: "Purple Smoothie",
    },
    {
        url: smoothie2, 
        alt: "Yellow smoothie",
        title: "Yellow Smoothie",
    }, 
    {
        url: smoothie3,  
        alt: "Orange smoothie",
        title: "Orange Smoothie",
    },
    {
        url: smoothie1, 
        alt: "Purple smoothie",
        title: "Purple Smoothie",
    }, 
    {
        url: smoothie2, 
        alt: "Yellow smoothie",
        title: "Yellow Smoothie",
    }, 
    {
        url: smoothie3,  
        alt: "Orange Smoothie",
        title: "Orange Smoothie",
    },
    {
        url: smoothie3,  
        alt: "Orange Smoothie",
        title: "Orange Smoothie",
    },
    {
        url: smoothie3,  
        alt: "Orange Smoothie",
        title: "Orange Smoothie",
    }
]

export default function RecomCarousel(image) {
    const windowWidth = window.matchMedia('(min-width: 600px)');

    const slideLeft = () => {
        var slider = document.getElementById('slider');

        if (windowWidth.matches) {
            slider.scrollLeft = slider.scrollLeft - 500
        } else {
            slider.scrollLeft = slider.scrollLeft - 150
        }
       
    }
    console.log(windowWidth)

    const slideRight = () => {
        var slider = document.getElementById('slider');

        if (windowWidth.matches) {
            slider.scrollLeft = slider.scrollLeft + 500
        } else {
            slider.scrollLeft = slider.scrollLeft + 150
        }
    }

  return (
    <div className='recom-carousel'>
        <button className="carousel-arrow" onClick={slideLeft}>
            <ArrowBackIosIcon />
        </button>

        <div id="slider" className='recom-slider'>
            {IMAGES.map((image) => (
                <div className='recom-slide' key={image.url}>
                    <img className="recom-img" src={image.url} alt={image.alt} />
                    <div style={{marginTop: "1em"}}>
                        <a href=''>{image.title}</a>
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