import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to Booky, your one-stop destination for all your reading adventures! Whether you're a lifelong book lover or just starting your literary journey, we have something special for everyone."</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header