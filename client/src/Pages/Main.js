import React from "react";
import Posts from "../Components/Posts/Posts"
import './styles.css';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";


export default function Main(){

    return(
        <div className="div" >
            <div className="biv">
                <Link to="/form">
                    <button className="button">Add Your Own</button>
                </Link>
            </div>
            <Posts />
        </div>
    )
}

