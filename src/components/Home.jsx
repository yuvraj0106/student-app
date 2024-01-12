import React from 'react';
import lib2 from '../assets/lib2.jpg'
const Home = () => {

  let myHomeStyle = {
    height: "92vh",
    backgroundImage: `url(${lib2})`,
backgroundRepeat:"no-repeat",
backgroundSize:"cover",
backgroundPosition:"center",
  }
  return (
    <div style={myHomeStyle} className='d-flex justify-content-center align-items-center display-3 '>
      <h1 className=' bg-dark text-success display-1 fw-bold px-3npm '>WELCOME TO TECHREL</h1>

    </div>
  );
};

export default Home;
