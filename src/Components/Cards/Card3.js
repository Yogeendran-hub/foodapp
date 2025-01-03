import React from "react";

import '../Cards/Card3.css';

import Naan from '../Cards/Naan.jpg';



export default function Card2()
{
    return (
    <div>
        <div className="card">
  <img src={Naan} className="card-img-top naanimg" alt="..."></img>
  <div className="card-body naanbody">
    <h5 className="card-title naantitle">Butter Naan</h5>
    <p className="card-text naantext">Traditionally cooked in a tandoor oven, naan are light and fluffy inside yet crisp outside.</p>
    <a href="/Order3" className="btn btn-primary button3">Order Now</a>
  </div>
  </div>

</div>

    );
}