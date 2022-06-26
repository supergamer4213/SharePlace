import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

export default function Home(){
    return(
        <div className="back">
            <h1 className="Title">SharePlace</h1>
            <h1 className="Desc">Welcome to the place where you can share all of your favorite summer activities in your city.</h1>
            <Link to="/main">
                <button className="button2">Start</button>
            </Link>
        </div>
    )
}