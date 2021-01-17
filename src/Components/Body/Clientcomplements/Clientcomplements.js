import React from 'react'

import Propertycard from './Propertycard';
export default function Clientcomplements() {
    return (
        <>
            <div className="col-12">
                <div className="mt-5">
                    <h2>
                        What guest are saying about homes in the United Kingdom.
                </h2>
                    <p>United Kingdom homes were rated 4.7 out of 5 stars with 10,500,000 + reviews</p>
                </div>

            </div>
            <div className="col-4">
                <Propertycard star="*****" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum The first line of Lorem Ipsum." user="Nicky" country="China"/>
            </div>
            <div className="col-4">
                <Propertycard star="*****" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum The first line of Lorem Ipsum." user="Shanna" country="United Kingdom"/>
            </div>
            <div className="col-4">
            <Propertycard star="*****" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum The first line of Lorem Ipsum." user="Debra" country="United States"/>
            </div>
        </>
    )
}
