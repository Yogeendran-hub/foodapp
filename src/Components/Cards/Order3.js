import React, {useEffect, useState} from 'react';
import './Order3.css';
import Naan from './Naan.jpg'


export default function Order3() {
  const [value,setValue]=useState(1);

  useEffect(()=>{
    if(value<1)
    {
      setValue(1);
    }
  },[value])

  return (
    <div class="card cardorder3">
  <img src={Naan} class="card-img-top order3img" alt="..."></img>
  <div class="card-body order3body">
    <h5 className="card-title dishname3">Name:<h5 className="butternaan">Butter Naan</h5></h5>
    <h5 className="titlequantity3">Quantity:</h5><h5 className="quantity3"><button className="minus3" onClick={()=> setValue(value-1)}><p className="minussymbol3">-</p></button> {value} <button className="plus3" onClick={()=> setValue(value+1)}><p className="plussymbol3">+</p></button></h5>
    <h5 className="titleprice3">Price:</h5><h5 className="price3">{value*100}</h5>
    <h5 className="titletotalprice3">Total Price:</h5><h5 className="totalprice3">{value*100}</h5>
    <a href="/Payment3" class="btn btn-primary order3button3">Proceed to payment</a>
  </div>
  <p className="copyright3">Copyright © 2024 Park Restaurant. All rights reserved.</p>
</div>
  );
}