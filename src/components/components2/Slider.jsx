import React from "react";
import ImageSlides from "../components2/ImageSlides";
import smoothie1 from "../../slides/smoothie1.png"
import smoothie2 from "../../slides/smoothie2.png"
import smoothie3 from "../../slides/smoothie3.png"

const IMAGES = [ 
    {url: smoothie1, alt: "Purple smoothie"}, 
    {url: smoothie2, alt: "Yellow smoothie"}, 
    {url: smoothie3,  alt: "Orange smoothie"} ]

function Slider() {
    return <div className="slider">
        <div className="slide-container">
           <ImageSlides images={IMAGES} key={IMAGES.url}/>
        </div>
    </div>
}

export default Slider;