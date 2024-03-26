import React from 'react';

export default function Footer(props) {
  return (
    <div className='footer-content'>
        <h3>{props.title}</h3>
        <p><a href="#">{props.opt1}</a></p>
        <p><a href="#">{props.opt2}</a></p>
        <p><a href="#">{props.opt3}</a></p>
        <p><a href="#">{props.opt4}</a></p>
    </div>
  )
}
