import React from 'react';
import images from '../images';

export default function ImageGallery() {
  return (
    <div className='gallery'>
        {images.map((image) => (
            <div className="gallery-box">
              <a href="/itemDetail"><img className="gallery-img" src={image.url} alt={image.alt} key={image.url}/></a>
              <div className='gallery-text'style={{ padding: "1em"}}>
                <a href='/itemDetail'>{image.title}</a>
                <p>{image.desc}</p>
              </div>
            </div>
        ))}
    </div>
  )
}
