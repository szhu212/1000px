import React from "react";
import { Link } from "react-router-dom"

const NotFoundForm = (props) => (
    <div className="not-found-container">

        <div className="not-found-box">
            <img className="not-found-logo" src="assets/logo_black.png"/>
            <h2>Oops! This page doesn’t exist.</h2>
            <p>Discover photographs from around the world, instead:</p>
            <Link to="/"> Homepage </Link>
            <Link to="/discovery"> Discovery </Link>
        </div>

    </div>

)

export default NotFoundForm;
