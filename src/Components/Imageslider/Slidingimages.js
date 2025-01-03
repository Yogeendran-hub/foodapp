import React from "react";
import Image1 from './Image1.jpg';
import Image2 from './Image2.jpg';
import Image3 from './Image3.jpg';
import Image4 from './Image4.jpg';
import Image5 from './Image5.jpg';

export default function Imageslider()
{
    return (
      <div className="bgimgslidingimage">
      <h1 className="title">Park Restaurant</h1>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Image1} class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={Image2} class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={Image3} class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={Image4} class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={Image5} class="d-block w-100" alt="..."></img>
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

        <h1 id="ourmenu">Our Menu</h1>
        
      </div>
      
    </div>
    
  );
}