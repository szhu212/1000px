import React from "react";
import { Link } from "react-router-dom";
import PictureIndex from "../picture/picture_index";
import Footer from "../footer";

class Homepage extends React.Component {

    constructor(props){
        super(props);
        this.discoverFunction=this.discoverFunction.bind(this)
    }

  discoverFunction() {
        // document.body.scrollTop = 0; // For Safari
        // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        document.documentElement.scrollTop = 0
       document.body.scrollTop = 0
       this.props.history.push('/discover')
      }
    // debugger
 render(){   
     const {pictures, fetchPictures} = this.props
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
        <button 
            onClick={this.discoverFunction}
            className="redirect-to-discover">
            Discover all illustrations
        </button>
        <Footer />
    </div>)
    }
}

export default Homepage 