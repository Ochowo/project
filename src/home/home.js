import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'
const Home = () => (
    <div className="main-container new-container">
        <h1>Links to assignments</h1>
        <Link to='/board'>1. Link to 8*8 board with alternative colors</Link> <br />
        <Link to='/todo'>2. Link to Todo</Link> <br />
        <Link to='/dashboard'>1. Link to dashboard with sample data set</Link> <br />
        <Link to='/form'>1. Link toform with validation</Link> 
    </div>
)

export default Home;