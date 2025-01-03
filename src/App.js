import React from 'react';
import './Components/Imageslider/Slidingimages.css';
import './App.css';
import Home from './Components/Main/Home.js';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Order1 from './Components/Cards/Order1.js';
import Order2 from './Components/Cards/Order2.js';
import Order3 from './Components/Cards/Order3.js';
import Payment1 from './Components/Payments/Payment1.js';
import Payment2 from './Components/Payments/Payment2.js';
import Payment3 from './Components/Payments/Payment3.js';
function App(){

  return (
  <div>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/Order1" element={<Order1 />}></Route>
        <Route path="/Order2" element={<Order2 />}></Route>
        <Route path="/Order3" element={<Order3 />}></Route>
        <Route path="/Payment1" element={<Payment1 />}></Route>
        <Route path="/Payment2" element={<Payment2 />}></Route>
        <Route path="/Payment3" element={<Payment3 />}></Route>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;