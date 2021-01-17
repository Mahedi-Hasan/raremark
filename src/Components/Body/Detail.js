import React from 'react'
import room from '../../assets/images/1280x500.jpg';
function Detail() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mt-5">
                            <h2>
                                Hotel Alborada Ocean Club ***</h2>
                            <p>United Kingdom homes were </p>
                            <p>***** *** 345 reviews</p>
                        </div>

                    </div>
                    <div className="col-12">
                        <div className="mt-2">
                            <img src={room} className="img-fluid rounded" />
                        </div>

                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col-8">
                        <div className="d-flex flex-row justify-content-between mt-2">
                            <div>
                                <h2>Stylish Specious Double with views of the city !!</h2>
                                <p>Greater London</p>
                            </div>
                            <div className="float-right">
                                <div className="complementsImg">
                                    <img src={room} />
                                </div>
                                <p>Simmy</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-start flex-row  mt-2 ">
                            <div className="mr-3">
                                *
                            </div>
                            <div>
                                <b>Private Room in Flat</b>
                                <p>2 guest 1 bed 1 shared bathroom </p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start flex-row  mt-2 ">
                            <div className="mr-3">
                                *
                            </div>
                            <div>
                                <b>Self Check-in</b>
                                <p>Check yourself in with the lockbox </p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start flex-row  mt-2 ">
                            <div className="mr-3">
                                *
                            </div>
                            <div>
                                <b>Breakfast</b>
                                <p>This is one of the few place in the area that has the feature </p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start flex-row  mt-2 ">
                            <div className="mr-3">
                                *
                            </div>
                            <div>
                                <b>Greate Communication</b>
                                <p>100% of recent guest Simmy 5-stars in Communication </p>
                            </div>
                        </div>
                        <hr />

                        <p className="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                        <p className=""> - Lorem Ipsum is simply dummy text  </p>
                        <p className=""> - Lorem Ipsum the printing and typesetting industry  </p>
                        <p className=""> - Lorem Ipsum is simply dummy text  </p>
                        <p className=""> - Lorem the printing and typesetting industry  </p>
                        <p className=""> - Lorem Ipsum is simply dummy text  </p>
                        <p className=""> - Lorem Ipsum the printing   </p>
                    </div>
                    <div className="col-4">
                        <div className="mt-2">
                            <div className="border p-3">
                                <div>
                                    <b>$24</b> <small>per night</small>
                                    <hr />

                                    <div>
                                        <form>
                                            <div className="form-group">
                                                <label for="guest">Guest</label>
                                                <select className="form-control" name="guest">
                                                    <option valu='1' selected>1 Guest</option>
                                                    <option valu='2'>2 Guests</option>
                                                    <option valu='3'>3 Guests</option>
                                                </select>
                                            </div>
                                            <div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">24 x 1 night <span class="badge badge-pill float-right">$24</span></li>
                                                <li class="list-group-item">Cleaning fee <span class="badge badge-pill float-right">$5</span></li>
                                                <li class="list-group-item">Servising fee <span class="badge badge-pill float-right">$4</span></li>
                                                <li class="list-group-item">Total <span class="badge badge-pill float-right">$33</span></li>
                                            </ul>
                                            <button className="btn btn-danger btn-block"><b>Reserve</b></button>
                                            </div>
                                            <div className="text-center mt-2">
                                            <small>you won't be charged yet <br/> certain reservation may also require a security deposite</small></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Detail;