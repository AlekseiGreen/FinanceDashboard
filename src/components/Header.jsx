import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import './Header.css';


function Header(){
    return(
        <div className='header'>
            <Link to="/" className='header-link'>File</Link>
            <Link to="/about" className='header-link'>Edit</Link>
            <Link to="/contact" className='header-link'>Help</Link>
        </div>
    );
}

export default Header;