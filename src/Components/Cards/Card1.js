import React from "react";

import Biriyani from './Biriyani.jpg';
import '../Cards/Card1.css';
export default function Card1() 
{
    return (
      <div>
        <div className="card">
  <img src={Biriyani} className="card-img-top biriyani" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title cardtitle1">Chicken Biriyani</h5>
    <p className="card-text card1text">A mixed rice dish, mainly popular in South Asia. It is made with rice, chicken meat and spices.</p>
    <a href="/Order1.js" target="_blank" className="btn btn-primary button1">Order Now</a>
  </div>
  </div>

</div>

    );
}