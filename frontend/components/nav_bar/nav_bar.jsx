import React from "react";
import { Link } from "react-router-dom";
import SearchContainer from "../search/search_bar_container"


class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.handleLogout=this.handleLogout.bind(this)
    }

    handleLogout(e) {
        this.props.logout();
    };

    render(){
        const { currentUser } = this.props
        const display = currentUser? (
                <div className='upload-button'>   
                   <button onClick={() => this.props.openModal('createPicture')}>Upload</button>
                </div>
            ):
            (   
                 <div className='session-button'>
                     <div className="non-circled-button"><Link to="/login">Log In</Link></div>
                     <div className="circled-button"><Link to="/signup">Sign Up</Link></div>
                </div>
            ) 
        // debugger
        const userButtonPicURL = currentUser && currentUser.avatarUrl ? currentUser.avatarUrl : window.userpicURL
        const userButton = currentUser? (
            <div className="dropdown-container">
                 <img className="dropdown-trigger" src={userButtonPicURL}/>
                 <div className="dropdown-list">
                     <p><Link to={`/users/${currentUser.id}`}>Profile</Link></p>
                     <p onClick={()=>this.handleLogout()}>Log out</p>
                 </div>
             </div>
        ):
        (   
            // To be updated
             <div>  </div>
        ) 
       

        return(
            <header className="nav-bar">
                <div className="nav-left">
                        <Link to="/">
                            <img className="logo-mint" src={window.logo_mintURL}/>
                        </Link>
                        <img className="logo-black" src={window.logo_blackURL}/>
                    <ul className="subnav-left">
                        <li className="discover-button"> <Link to="/discover">Discover</Link></li>
                        {/* <li><Link to="/about">About</Link></li>   */}
                        <SearchContainer />
                    </ul>
                </div>
                <ul className="nav-right">
                    {userButton}
                    {display}
                </ul>

            </header>

        )
    }

}

export default NavBar;