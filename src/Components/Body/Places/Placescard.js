import React from 'react'
import { Link } from 'react-router-dom';
import place from '../../../assets/images/places.jpg';
export default function Placescard(props) {
    return (
        <div>
            <div className="d-flex flex-column">
                <Link to="/details">
                    <div className="complementsImg1">
                        <img src={place} className="img-fluid rounded" />
                        <div className="placesTag">
                            <div className="placesTagTitle">
                                guide
                        </div>
                            <div>{props.tag}</div>
                        </div>
                    </div>
                </Link>
                <div className="text-justify mt-2">
                    {props.text}
                </div>

            </div>


        </div>
    )
}
