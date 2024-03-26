import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Indicator from './Indicator';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const REVIEWS = [
    { name: "Jun", content: "Et consectetur lacus rutrum netus vel feugiat nam. Sed elit sit iaculis ullamcorper commodo." },
    { name: "Hyeonin", content: "Et consectetur lacus rutrum netus vel feugiat nam. Sed elit sit iaculis ullamcorper commodo." },
    { name: "Jireh", content: "Et consectetur lacus rutrum netus vel feugiat nam. Sed elit sit iaculis ullamcorper commodo." },
    { name: "Jesus", content: "Et consectetur lacus rutrum netus vel feugiat nam. Sed elit sit iaculis ullamcorper commodo." },
    { name: "Reah", content: "Et consectetur lacus rutrum netus vel feugiat nam. Sed elit sit iaculis ullamcorper commodo." },
    { name: "Hanna", content: "Et consectetur lacus rutrum netus vel feugiat nam. Sed elit sit iaculis ullamcorper commodo." },
    { name: "Sarah", content: "Et consectetur lacus rutrum netus vel feugiat nam. Sed elit sit iaculis ullamcorper commodo." },
    { name: "Samuel", content: "Et consectetur lacus rutrum netus vel feugiat nam. Sed elit sit iaculis ullamcorper commodo." },
    { name: "Esther", content: "Et consectetur lacus rutrum netus vel feugiat nam. Sed elit sit iaculis ullamcorper commodo." },
]


export default function Reviews() {
    const [currentPage, setCurrentPage] = useState(1); // Current page state

    // Total number of items and items per page
    const totalItems = REVIEWS.length;
    const reviewsPerPage = 3;

    // Calculate the start index and end index of reviews to display based on the current page
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;

    const reviews = REVIEWS.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalItems / reviewsPerPage);

    // Generate an array of page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    //Function to prev & next page navigation
    const prevPage = () => {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = () => {
        if(currentPage !== totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    // Function to handle page navigation
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    // You can add logic here to fetch data for the selected page from an API or update the UI accordingly.
    };

    //Button disabled
    const isPrevDisabled = (currentPage == 1)
    const isNextDisabled = (currentPage == totalPages)

    //Dynamic review date
    const currentDate = new Date().toLocaleString('en-us',{month:'short', day:'numeric', year:'numeric'});

  return (
    <div>
        {reviews.map((review, index) => (
            <div key={index} className='review-container'>
                <div className='review-content'>
                    <div className='stars'>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarHalfIcon />
                    </div>
                    <p>
                        {review.content}
                    </p>
                    <div className='reviewer'>
                        <p>By<span> {review.name} </span></p>
                        <p>{currentDate}</p>
                    </div>
                </div>
                <Indicator />
            </div>
        ))}
                
        <div className="pagination">
            <button onClick={prevPage} disabled={isPrevDisabled} style={{padding: "6px 6px"}}>
                <ArrowBackIcon id='pagination-arrow'/>
            </button>

            {pageNumbers.map((pageNumber) => (
                <button
                key={pageNumber}
                className={pageNumber === currentPage ? 'active' : ''}
                onClick={() => handlePageClick(pageNumber)}
                >
                {pageNumber}
                </button>
            ))}

            <button onClick={nextPage} disabled={isNextDisabled} style={{padding: "6px 6px"}}>
                <ArrowForwardIcon id='pagination-arrow'/>
            </button>
        </div>
    </div>
  )
}