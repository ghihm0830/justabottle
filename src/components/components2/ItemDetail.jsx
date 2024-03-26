import React, { useState, useRef, useEffect } from 'react';
import Nav from '../Nav';
import Slider from './Slider';
import Selector from './Selector';
import Reviews from './Reviews';
import ItemInfo from './ItemInfo';
import RecomCarousel from './RecomCarousel';
import ReviewSlider from './ReviewSlider';
import Footer from '../Footer';
import Copyright from '../Copyright';

export default function ItemDetail() {
    const [title, setTitle] = useState('Frequently Purchased With');
    const windowSize = window.matchMedia('(min-width: 600px)');

    useEffect(() => {
      // Function to update title based on window size
      function updateTitle() {
        if (windowSize.matches) { // Adjust this threshold as needed
          setTitle('Frequently Purchsed With');
        } else {
          setTitle('Recommendations');
        }
      }

        // Initial call to set title on component mount
        updateTitle();

        // Event listener for window resize
        window.addEventListener('resize', updateTitle);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', updateTitle);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount


    
    // const isSmallWindow = windowSize.matches;

    const handleSubmit = (e) => {
        e.defaultPrevent();
    }

  return (
    <div>
        <Nav />

        <div className='detail-container'>
            <Slider />

            <form className='detail' onSubmit={handleSubmit}>
                <div className='detail-text'>
                    <div>
                        <h1>CAD 18.<sup>30</sup></h1>
                        <h2>Discount 10% was <span>$20.31</span></h2>
                    </div>
                    <div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Asperiores deserunt cumque autem dignissimos, ratione error voluptatibus fuga officia aliquid!
                            Nesciunt doloribus officiis ut hic delectus et molestiae aperiam excepturi velit.
                        </p>
                    </div>
                </div>

                <Selector />
            </form>
        </div>

        <section>
            <div className='grid'>
                <div className="grid-1">
                    <h2>9 <span>of reviews</span></h2>
                    <Reviews />
                </div>

                <div className='grid-2'>
                    <h2>Item Details</h2>
                    <ItemInfo />
                </div>

            </div>
        </section>

        <section>
            <h2 style={{marginBottom: "1em", fontSize: "22px", fontWeight: "600"}}>
                Photos from Reviews
            </h2>
            <ReviewSlider />
        </section>

        <section>
            <h2 style={{marginBottom: "1em", fontSize: "22px", fontWeight: "600" }}>
                {title}
            </h2>
            <RecomCarousel />
        </section>

        <footer>
            <div className="footers">
                <Footer
                title= "About"
                opt1= "Option1"
                opt2= "Option2"
                opt3= "Option3"
                opt4= "Option4"
                />

                <Footer
                title= "Title"
                opt1= "Option1"
                opt2= "Option2"
                opt3= "Option3"
                opt4= "Option4"
                />

                <Footer
                title= "Title"
                opt1= "Option1"
                opt2= "Option2"
                opt3= "Option3"
                opt4= "Option4"
                />

                <Footer
                title= "Title"
                opt1= "Option1"
                opt2= "Option2"
                opt3= "Option3"
                opt4= "Option4"
                />
            </div>
            <div className="copy-container">
                <Copyright />
            </div>
        </footer>
        
    </div>
  )
}


