import React from "react";
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    render() {
        
        

        return (
            <div className="footer">
                <div className="columns-cont">
                    {/* <div className="nav-column">
                          <h2>Navigate</h2>
                          <div><Link to='/discover'>Discover</Link></div>
                    </div> */}

               
                    <div className="dev-column">
                        <h2>Developer</h2>
                            <div>
                                Skylar Zhu
                     
                        </div>
                    </div>
                    <div className="soc-column">
                         <h2>Connect</h2>
                         <a href="https://github.com/szhu212">
                                <i className="fab fa-github-square fa-2x"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/skylar-wenyu-zhu-98aa00108/">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                    </div>
                </div>
                <div className="copyright">© 2020 100Illusts</div>
            </div>
        )
    }

}

export default Footer;