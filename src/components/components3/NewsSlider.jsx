import React from "react";
import NewsImageSlides from './NewsImageSlides';
import newsL1 from '../../slides/newsL1.png';
import newsL2 from '../../slides/newsL2.png';
import newsL3 from '../../slides/newsL3.png';

const IMAGES = [ 
    {url: newsL3, alt: "Two people with smoothies"}, 
    {url: newsL1, alt: "A woman drinking a smoothie"}, 
    {url: newsL2,  alt: "Two kids with smothie and borccoli"} 
]

function NewsSlider() {
    return <div className="newsSlider">
        <div className="newsSlider-box">
            <div className="newsSlider-slides">
               <NewsImageSlides images={IMAGES} key={IMAGES.url} />
            </div>
        </div>

    </div>
}

export default NewsSlider;