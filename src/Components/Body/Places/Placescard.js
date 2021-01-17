import React from 'react'
import place from '../../../assets/images/places.jpg';
export default function Placescard(props) {
    return (
        <div>
            <div className="d-flex flex-column">
                    <div className="complementsImg1">
                        <img src={place} className="img-fluid rounded" />
                        <div className="placesTag">
                        <div className="placesTagTitle">
                            guide
                        </div>
                        <div>{props.tag}</div>
                        </div>
                    </div>
                    
                    <div className="text-justify mt-2">
                    {props.text}
                    </div>
                    
                </div>
                
            
        </div>
    )
}
