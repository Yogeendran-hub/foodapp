import React from "react";

import '../Cards/Card2.css';

import Panneerbuttermasala from '../Cards/Panneerbuttermasala.jpg';


export default function Card2()
{
    return (
    <div>
        <div className="card">
  <img src={Panneerbuttermasala} className="card-img-top imgpbm" alt="..."></img>
  <div className="card-body pbmbody">
    <h5 className="card-title pbmtitle">Panneer Butter Masala</h5>
    <p className="card-text pbmtext">Paneer Butter Masala is a creamy and mildly sweet gravy made with butter, tomatoes, cashews, spices and paneer.</p>
    <a href="/Order2" className="btn btn-primary button2">Order Now</a>
  </div>
  </div>

</div>

    );
}