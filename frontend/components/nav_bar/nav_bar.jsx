import React from "react";
import { Link } from "react-router-dom"

class NavBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const {currentUser} = this.props
        const display = currentUser? (
                <div className='upload-button'>   
                   <li><button>Upload</button></li> 
                </div>
            ):
            (   
                 <div className='session-button'>
                     <li><Link to="/login">Log In</Link></li>
                     <li className="circled-button"><Link to="/signup">Sign Up</Link></li>
                </div>

            )

        return(
            <header className="nav-bar">
                <div className="logo">
                    <Link to="/">
                        <img className="logo-mint" src="assets/logo_mint.png"/>
                    </Link>
                    <img className="logo-black" src="assets/logo_black.png"/>
                </div>
                <ul className="nav-left">
                    <li> <Link to="/discover">Discover</Link></li>
                    <li><Link to="/about">About</Link></li>
                    
                </ul>
                <ul className="nav-right">
                    {display}
                    <li className="circled-button">Demo User</li>
                </ul>

            </header>

        )
    }

}

export default NavBar;