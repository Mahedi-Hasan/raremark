import React from 'react'
import { Link } from 'react-router-dom';
import place from '../../../assets/images/placeholder-150x250.png';
export default function Justbookedcard(props) {
    return (
        <div>
            <div className="d-flex flex-column">
            <Link to="/details">
                    <div className="complementsImg1">
                        <img src={place} className="img-fluid rounded" />
                    </div>
                    </Link>
                    <div className="text-justify mt-2">
                    {props.price} {props.text}
                    </div>
                    <div className="mt-3">
                        {props.star} {props.starnumber} reviews
                    </div>
                </div>
                
            
        </div>
    )
}
