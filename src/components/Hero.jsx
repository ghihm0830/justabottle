import React from "react";
import Nav from "./Nav";
import Carousel from "./Carousel";
import ImageGallery from "./ImageGallery";
import HeroSlider from "./HeroSlider";
import NewsCarousel from "./NewsCarousel";
import Auth from "./Auth";
import Footer from "./Footer";
import Copyright from "./Copyright";

function Hero() {
    return <div>
        <Nav />
        <main>
            <HeroSlider />

            <div className="hero-text">
                <div className="hero-title">
                    <h1>Healthie Life</h1>
                    <h2>Just in a bottle</h2>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "1em"}}>
                    <h3 style={{fontSize: "18px", maxWidth: "50ch"}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Perferendis neque, molestias amet numquam quas ipsa!
                    </h3>
                    <h3 style={{fontSize: "18px", maxWidth: "50ch"}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Recusandae harum minus consequuntur rem nulla atque quaerat delectus facilis!
                        Culpa accusantium quam modi consequatur labore deserunt.
                    </h3>
                </div>
            </div>
        </main>

        <section>
            <Carousel />
        </section>

        <section>
            <div className="section-header">
                <h2 style={{fontSize: '22px', fontWeight: '600'}}>Most Populars</h2>
                <a className="more" href="">more</a>
            </div>

            <ImageGallery />
        </section>

        <section>
            <div className="section-header">
                <h2 style={{fontSize: '22px', fontWeight: '600'}}>Healthy News</h2>
                <a className="more" href="">more</a>
            </div>

            <NewsCarousel />
        </section>

        <section style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div className="section-header">
                <h2 style={{fontSize: '22px', fontWeight: '600'}}>Have a Question?</h2>
            </div>
            <div style={{width: "100%"}}>
                <Auth />
            </div>
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
}

export default Hero;