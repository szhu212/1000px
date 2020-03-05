import React from "react";
import { Link } from "react-router-dom"

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.handleLogout=this.handleLogout.bind(this)
    }

    handleLogout(e) {
        this.props.logout();
    };

    render(){
        const {currentUser} = this.props
        const display = currentUser? (
                <div className='upload-button'>   
                   <button>Upload</button>
                </div>
            ):
            (   
                 <div className='session-button'>
                     <li className="non-circled-button"><Link to="/login">Log In</Link></li>
                     <li className="circled-button"><Link to="/signup">Sign Up</Link></li>
                </div>

            ) 

        const userButton = currentUser? (
            <div className="dropdown-container">
                 <img className="dropdown-trigger" src="assets/userpic.png"/>
                 <div className="dropdown-list">
                     <p>Profile</p>
                     <p onClick={()=>this.handleLogout()}>Log out</p>
                 </div>
             </div>
        ):
        (   
             <div>  </div>
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
                    {userButton}
                <ul className="nav-right">
                    {display}
                </ul>

            </header>

        )
    }

}

export default NavBar;