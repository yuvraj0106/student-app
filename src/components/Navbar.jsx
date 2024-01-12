import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only"></span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="allstudent">All Student</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="addstudent">Add Student</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="viewstudent">View Student</Link>
      </li>
    </ul>
  </div>
</nav>

    </div>
  )
}

export default Navbar
