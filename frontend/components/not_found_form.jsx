import React from "react";
import { Link } from "react-router-dom"

const NotFoundForm = (props) => (
    <div className="not-found-container">

        <div className="not-found-box">
            <img className="not-found-logo" src={window.logo_blackURL}/>
            <h2>Oops! This page doesn’t exist.</h2>
            <p>Discover illustrations from around the world, instead:</p>
            <Link to="/"> Homepage </Link>
            <Link to="/discover"> Discover </Link>
        </div>

    </div>

)

export default NotFoundForm;
