import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';

type ImageSlideProps = {
    images: {
        url: String,
        alt: String
    } []
}

export default function ImageSlides( {images}: ImageSlideProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showPrevImg() {
        setImageIndex (index => {
            if (index === images.length - 1) return 0
            return index + 1
        })
    }

    function showNextImg() {
        setImageIndex(index => {
            if (index === 0) return images.length - 1
            return index - 1
        })
    }

    return <div className="slides" aria-label="Image slider">
        <div style={{width: "100%", height: "100%", overflow: "hidden", display: "flex"}}>
            {images.map(({url, alt}, index) => (
                <img 
                key={url} 
                src={url} 
                alt={alt} 
                aria-hidden={imageIndex !== index}
                className="slide-img" 
                style={{translate: `${-100 * imageIndex}%`}}/>
            ))}
        </div>
        <button className="arrow" style={{right: "0"}} onClick={showPrevImg} aria-label="View previous image">
            <ArrowForwardIosIcon aria-hidden/>
        </button>
        <button  className="arrow" style={{left: "0"}} onClick={showNextImg} aria-label="View next image">
            <ArrowBackIosIcon aria-hidden/>
        </button>
        <div style={{
            position: "absolute",
            bottom: ".5rem",
            left: "50%",
            translate: "-50% 30%",
            display: "flex",
            gap: ".25rem",
            alignItems: "center",
        }}>
            <div>
                {images.map((_, index) => (
                    <button key={index} className="slide-dots" onClick={() => setImageIndex(index)} aria-label= {`View image ${index + 1}`}>
                        {index === imageIndex ? <CircleIcon style={{color: "#747373", fontSize: "small", background: "none"}} aria-hidden/> : <CircleIcon style={{color: "#F6F6F6", fontSize: "small", background: "none"}} aria-hidden/>}
                    </button>
                ))}
            </div>
        </div>
    </div>
}