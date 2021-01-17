import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm pr-3 pl-3 mb-2 bg-white rounded pb-0">
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/foryou" className="nav-link">FOR YOU</Link>
                            {/* <a className="nav-link" href="#">For Your 
                            <span className="sr-only">(current)</span>
                            
                            </a> */}
                        </li>
                        <li className="nav-item">
                        <Link to="/home" className="nav-link">HOMES</Link>
                            {/* <a className="nav-link" href="#">Home</a> */}
                        </li>
                        <li className="nav-item">
                        <Link to="/experiences" className="nav-link">EXPEERIENCES</Link>
                            {/* <a className="nav-link" href="#">Experiences</a> */}
                        </li>
                        <li className="nav-item">
                        <Link to="/experiences" className="nav-link">PLACES</Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}

