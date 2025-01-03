import React, { useEffect, useState } from 'react';
import './Order1.css';
import Biriyani from './Biriyani.jpg'

export default function Order1() {
  const [value,setValue] = useState(1); //useState

  useEffect(()=>{                        //useEffect
    if(value<1)
    {
      setValue(1);
    }
  },[value])

  return (
    <div class="card cardorder1">
  <img src={Biriyani} class="card-img-top order1img" alt="..."></img>
  <div class="card-body order1body">
    <h5 className="card-title dishname1">Name: <h5 className="chickenbiriyani">Chicken Biriyani</h5></h5>
    <h5 className="titlequantity1">Quantity:</h5><h5 className="quantity1"><button className="minus1" onClick={()=> setValue(value-1)}><p className="minussymbol1">-</p></button> {value} <button className="plus1" onClick={()=> setValue(value+1)}><p className="plussymbol1">+</p></button></h5>
    <h5 className="titleprice1">Price:</h5><h5 className="price1">{value*120}</h5>
    <h5 className="titletotalprice1">Total Price:</h5><h5 className="totalprice1">{value*120}</h5>
    <a href="/Payment1" class="btn btn-primary order1button1">Proceed to Payment</a>
  </div>
  <p className="copyright1">Copyright © 2024 Park Restaurant. All rights reserved.</p>
</div>
  );
}