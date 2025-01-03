import React, {useEffect, useState} from 'react';
import './Order2.css';
import Panneerbuttermasala from './Panneerbuttermasala.jpg'

export default function Order2() {
  const [value,setValue] = useState(1); //useState
    
  useEffect(()=>{                        //useEffect
    if(value<1)
    {
      setValue(1);
    }
  },[value])
  return (
    <div class="card cardorder2">
  <img src={Panneerbuttermasala} class="card-img-top order2img" alt="..."></img>
  <div class="card-body order2body">
    <h5 className="card-title dishname2">Name: Panneer Butter<h5 className="Masala"> Masala</h5></h5>
    <h5 className="titlequantity2">Quantity:</h5><h5 className="quantity2"><button className="minus2" onClick={()=> setValue(value-1)}><p className="minussymbol2">-</p></button> {value} <button className="plus2" onClick={()=> setValue(value+1)}><p className="plussymbol2">+</p></button></h5>
    <h5 className="titleprice2">Price:</h5><h5 className="price2">{value*230}</h5>
    <h5 className="titletotalprice2">Total Price:</h5><h5 className="totalprice2">{value*230}</h5>
    <a href="/Payment2" class="btn btn-primary order2button2">Proceed to payment</a>
  </div>
  <p className="copyright2">Copyright © 2024 Park Restaurant. All rights reserved.</p>
</div>
  );
}