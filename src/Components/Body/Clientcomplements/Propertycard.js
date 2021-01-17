import React from 'react'
import { Link } from 'react-router-dom';
import room from '../../../assets/images/room.jpg';
export default function Propertycard(props) {
    return (
        <div>
            <div className="d-flex flex-column">
                    <Link to="/details">
                    <div className="complementsImg1">
                        <img src={room} className="img-fluid rounded" />
                    </div>
                    </Link>
                    <div className="mt-3">
                        {props.star}
                    </div>
                    <div className="text-justify">
                    {props.text}
                    </div>
                </div>
                <div d-flex flex-row className="mt-3">
                    <div className="complementsImg">
                        <img src={room} className="float-left" />
                    </div>
                    <div>
                        <h5 className="mb-0">{props.user}</h5>
                        <p>{props.country}</p>
                    </div>
                </div>
            
        </div>
    )
}
