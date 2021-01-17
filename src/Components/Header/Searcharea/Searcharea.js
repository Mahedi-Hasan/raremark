import React from 'react'

function Searcharea() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="mt-3 bg-info text-white p-2">
                        <div>
                            <h2> Resorts </h2>
                            <p>Treat yourself ! your dream resort stay is just one click away.</p>
                            <div className="pl-1">
                                <form>
                                    <div className="form-row headerTopForm1 d-flex ">
                                        <div className="flex-fill">
                                            <i className="fas fa-search"></i>
                                            <input type="text" className="form-control custBorder rounded-left" placeholder="More places than you ever go (but you can try !         )" />
                                        </div>
                                        <div className="flex-fill">
                                            <div>
                                                <i className="fas fa-search"></i>
                                                <input type="text" className="form-control custBorder border-left-0" placeholder="Check-in - Check-out" />
                                            </div>
                                        </div>
                                        <div className="flex-fill">
                                            <i className="fas fa-user"></i>
                                            <select className="form-control custBorder border-left-0" >
                                                <option>2 audults . 0 children . 1 room</option>
                                            </select>
                                        </div>
                                        <div className="flex-fill ">
                                            <button className="btn btn-primary custBorder rounded-right  border-left-0">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Searcharea;
