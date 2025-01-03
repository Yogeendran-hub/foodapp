import React from 'react';
import '../Imageslider/Slidingimages.js';
import './Home.css';
import { Link } from 'react-router-dom';
import Slidingimages from '../Imageslider/Slidingimages.js';
import Search from '../Navbar/Search.js';
import Card1 from '../Cards/Card1.js';
import Card2 from '../Cards/Card2.js';
import Card3 from '../Cards/Card3.js';

export default function Home() {
  return (
    <div>
      <p className="copyright">Copyright © 2024 Park Restaurant. All rights reserved.</p>
      <Search />
        <Slidingimages/>
        <Link to={'/Order1'}><Card1/></Link>
        <Link to={'/Order2'}><Card2/></Link>
        <Link to={'/Order3'}><Card3/></Link>
    </div> 
  );
}