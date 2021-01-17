import React from 'react'
import { Link } from 'react-router-dom'
import Placescard from './Placescard'

export default function Places() {
    return (
        <>
            <div className="col-12">
                <div className="mt-5 mb-3 d-flex flex-row justify-content-between">
                    <h2>Places in London </h2>
                    <Link className="text-right"> See All </Link>
                </div>

            </div>
            <div className="col">
                <Placescard text=" Lorem Ipsum is simply dummy"  tag="Hand Bag shooping" />
            </div>
            <div className="col ">
            <Placescard  text=" Lorem Ipsum " tag="Where to see comedy" />
            </div>
            <div className="col">
                <Placescard text=" Lorem Ipsum is ." tag="Scarf shopes"  />
            </div>
            <div className="col">
                <Placescard text=" Lorem Ipsum is simply dummy " tag="wine rars" />
            </div>
            <div className="col">
                <Placescard text=" Lorem Ipsum is simply."  tag="vintage decor"/>
            </div>
        </>
    )
}
