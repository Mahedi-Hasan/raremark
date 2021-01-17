import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Headertop() {
    return (
        <div className="d-flex flex-row justify-content-between pr-3 pt-2">
            <div>
                <form>
                    <div className="form-row headerTopForm">
                        <div className="col">
                            <i className="fas fa-search"></i>
                            <input type="text" className="form-control" placeholder="Anywhere"/> 
                        </div>
                        <div className="col d-flex flex-row justify-content-between">
<div>
                            <i className="fas fa-search"></i>
                            <input type="text" className="form-control" placeholder="Anytime"/> 
                            </div>
                        </div>
                        <div className="col">
                        <i className="fas fa-user"></i>
                            <input type="text" className="form-control" placeholder="1 guest"/> 
                        </div>
                    </div>
                </form>

                {/* <button className="btn btn-primary btn-sm"> Hello btn</button> */}
            </div>
            <div className="topRightBar">
                
                    <Link to='/become-host' >Become a Host</Link>
                    <Link to='/help' >Help</Link>
                    <Link to='/signup' >Sign up</Link>
                    <Link to='/login' >Login</Link>
            </div>
        </div>
    )
}
