import React from 'react'
import './Search.css';


export default function Search() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
  <div className="container-fluid">
      <form class="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
</nav>



    </div>
  )
}
