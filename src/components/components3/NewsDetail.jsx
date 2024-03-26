import React from 'react';
import Footer from '../Footer';
import Copyright from '../Copyright';
import Nav from '../Nav';
import News from './News';


export default function NewsDetail() {
  return (
    <div>
        <Nav />
        <main>
            <News />
        </main>
        
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
