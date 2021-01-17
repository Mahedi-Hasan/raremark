import React from 'react'
import { Link } from 'react-router-dom'
import place from '../../assets/images/places.jpg';

export default function Searchpage() {
    return (
        <div className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Link to="/details">
                            <div className="complementsImg1">
                                <img src={place} className="img-fluid rounded" />
                                {/* <div className="placesTag">
                                            <div className="placesTagTitle">
                                                guide
                        </div>
                                            <div>{props.tag}</div>
                                        </div> */}
                            </div>
                        </Link>
                    </div>
                    <div className="col-9">
                        <div className="d-flex flex-row justify-content-between">
                            <span>Private Room</span>
                            <span>* 4.61 (207)</span>
                        </div>
                        <h2>Private Room 1-double, 1-Single bed, Central London</h2>
                        <p>3 guests - 1 bedroom -2 beds - 1 shared bathroom</p>
                        <p>Wifi - Kitchen - Heating - Washing Machine</p>

                        <div className="d-flex flex-row justify-content-between mt-5">
                            <div><b>* Rare Find</b></div>
                            <div>$ 38 / night <br/>
                                <small>$ 38 total </small>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-3">
                        <Link to="/details">
                            <div className="complementsImg1">
                                <img src={place} className="img-fluid rounded" />
                                {/* <div className="placesTag">
                                            <div className="placesTagTitle">
                                                guide
                        </div>
                                            <div>{props.tag}</div>
                                        </div> */}
                            </div>
                        </Link>
                    </div>
                    <div className="col-9">
                        <div className="d-flex flex-row justify-content-between">
                            <span>Private Room</span>
                            <span>* 4.61 (207)</span>
                        </div>
                        <h2>Private Room 1-double, 1-Single bed, Central London</h2>
                        <p>3 guests - 1 bedroom -2 beds - 1 shared bathroom</p>
                        <p>Wifi - Kitchen - Heating - Washing Machine</p>

                        <div className="d-flex flex-row justify-content-between mt-5">
                            <div><b>* Rare Find</b></div>
                            <div>$ 38 / night <br/>
                                <small>$ 38 total </small>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-3">
                        <Link to="/details">
                            <div className="complementsImg1">
                                <img src={place} className="img-fluid rounded" />
                                {/* <div className="placesTag">
                                            <div className="placesTagTitle">
                                                guide
                        </div>
                                            <div>{props.tag}</div>
                                        </div> */}
                            </div>
                        </Link>
                    </div>
                    <div className="col-9">
                        <div className="d-flex flex-row justify-content-between">
                            <span>Private Room</span>
                            <span>* 4.61 (207)</span>
                        </div>
                        <h2>Private Room 1-double, 1-Single bed, Central London</h2>
                        <p>3 guests - 1 bedroom -2 beds - 1 shared bathroom</p>
                        <p>Wifi - Kitchen - Heating - Washing Machine</p>

                        <div className="d-flex flex-row justify-content-between mt-5">
                            <div><b>* Rare Find</b></div>
                            <div>$ 38 / night <br/>
                                <small>$ 38 total </small>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-3">
                        <Link to="/details">
                            <div className="complementsImg1">
                                <img src={place} className="img-fluid rounded" />
                                {/* <div className="placesTag">
                                            <div className="placesTagTitle">
                                                guide
                        </div>
                                            <div>{props.tag}</div>
                                        </div> */}
                            </div>
                        </Link>
                    </div>
                    <div className="col-9">
                        <div className="d-flex flex-row justify-content-between">
                            <span>Private Room</span>
                            <span>* 4.61 (207)</span>
                        </div>
                        <h2>Private Room 1-double, 1-Single bed, Central London</h2>
                        <p>3 guests - 1 bedroom -2 beds - 1 shared bathroom</p>
                        <p>Wifi - Kitchen - Heating - Washing Machine</p>

                        <div className="d-flex flex-row justify-content-between mt-5">
                            <div><b>* Rare Find</b></div>
                            <div>$ 38 / night <br/>
                                <small>$ 38 total </small>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-3">
                        <Link to="/details">
                            <div className="complementsImg1">
                                <img src={place} className="img-fluid rounded" />
                                {/* <div className="placesTag">
                                            <div className="placesTagTitle">
                                                guide
                        </div>
                                            <div>{props.tag}</div>
                                        </div> */}
                            </div>
                        </Link>
                    </div>
                    <div className="col-9">
                        <div className="d-flex flex-row justify-content-between">
                            <span>Private Room</span>
                            <span>* 4.61 (207)</span>
                        </div>
                        <h2>Private Room 1-double, 1-Single bed, Central London</h2>
                        <p>3 guests - 1 bedroom -2 beds - 1 shared bathroom</p>
                        <p>Wifi - Kitchen - Heating - Washing Machine</p>

                        <div className="d-flex flex-row justify-content-between mt-5">
                            <div><b>* Rare Find</b></div>
                            <div>$ 38 / night <br/>
                                <small>$ 38 total </small>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
