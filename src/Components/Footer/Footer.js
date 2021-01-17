import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <div className="container-fluid">
                <hr />

                <div className="container">
                    <div className="row mb-3 mt-3">
                        
                        <div className="col-3">
                            <div>
                                <form>
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option selected value="en" >English</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option selected value="en" >INR</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-3">
                            <div>
                                <p className="pl-2">Airbnb</p>
                                <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">About us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Career</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Press</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Policies</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Help</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Diversity & Belonging</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3">
                            <div>
                                <p className="pl-2">Discover</p>
                                <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Trust & Safety</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Travel Credit</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Gidt Cards</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Airbnb Citizen</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Business Travel</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Guidebooks</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Airbnbmag</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3">
                            <div >
                                <p className="pl-2">Hosting</p>
                                <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Why Host</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Hospitality</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Responsible Hosting</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Community Center</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        
                    </div>
                    <hr />
                    <div className="d-flex flex-row justify-content-between mt-3 mb-5">
                        <div>
                            Airbnb, Inc.
                        </div>
                        <div className="topRightBar">
                            <Link to='/become-host' >Terms</Link>
                            <Link to='/help' >Privacy</Link>
                            <Link to='/signup' >Site Map</Link>
                            <Link to='/signup' >*</Link>
                            <Link to='/signup' >*</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
