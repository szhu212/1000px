import React from "react";
import { Link } from "react-router-dom";
import PictureIndex from "../picture/picture_index";
import Footer from "../footer";

const Homepage = ({pictures, editorsChoice, fetchPictures}) => {
    // debugger
    return(
    <div className="Homepage">
        <div className="homepage-pic-container">
            <div className="greeting">
                <h2>Discover and share the world’s best illustrations.</h2>
                <p>Get inspired with incredible illustrations from diverse styles and genres around the world. </p>
            </div>
        </div>
        <div className="index-container">
            <div className="medal-icon-container">
                <div className="medal-icon"></div>
            </div>
            <h2>Editors' Choice</h2>
            <p>Discover fresh inspiration daily. Your illustrations could even be featured in our handpicked Editors’ Choice Gallery.</p>
            <PictureIndex 
                pictures={pictures}
                fetchPictures={fetchPictures}
                // editorsChoice={editorsChoice}
             />
        </div>
        <Footer />
    </div>)
}

export default Homepage 