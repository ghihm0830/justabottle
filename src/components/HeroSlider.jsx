import React, { useEffect, useState } from 'react';
import heroImgs from '../heroImgs';

const HeroSlider = () => {
  const [currentState, setCurrentState] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if(currentState === 3) {
        setCurrentState(0)
      } else {
        setCurrentState(currentState + 1)
      }
    }, 4000)
    return () => clearTimeout(timer)
  }, [currentState])

  const heroImgStyle = {
    backgroundImage: `url(${heroImgs[currentState].url})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "clamp(200px, 80vw, 500px)",
    width: "clamp(200px, 80vw, 500px)",
  };

  // const goToNext = () => {
  //   setCurrentState(currentState => {
  //     if (currentState === heroImgs.length - 1) {
  //       return currentState - 1
  //     }
  //   });
  // };

  // const goToNext = (currentState) => {
  //   setCurrentState(currentState);
  // };

  return (
    <div className='hero-slider'>
      <div style={heroImgStyle}></div>

      <div className='boullt'>
        {
          heroImgs.map((_, index) => (
            <button 
            key={index} 
            onClick={() => setCurrentState(index)}
            aria-label= {`View image ${index + 1}`}
            style={{backgroundColor: index === currentState ? "#747373" : null}}
            >
            </button>
          ))
        }

          {/* {heroImgs.map((_, currentState) => (
          <button 
          id='hero-btn' 
          key={currentState} 
          onClick={() => goToNext(currentState)} 
          aria-label= {`View image ${currentState + 1}`}
          style={{backgroundColor: isClicked ? "white" : null}}
          >
          </button>
        ))} */}
        
      </div>
    </div>
  );
};

export default HeroSlider;
