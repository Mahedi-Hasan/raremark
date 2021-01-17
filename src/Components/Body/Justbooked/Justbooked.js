import React from 'react'
import Justbookedcard from './Justbookedcard'

export default function Justbooked() {
    return (
        <>
            <div className="col-12">
                <div className="mt-5 mb-3">
                    <h2>Just Booked. </h2>
                </div>

            </div>
            <div className="col">
                <Justbookedcard price="$1234" text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum The first line of Lorem Ipsum." star="*****" starnumber="98"/>
            </div>
            <div className="col ">
            <Justbookedcard  price="$3212" text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum The first line of Lorem Ipsum." star="*****" starnumber="88"/>
            </div>
            <div className="col">
                <Justbookedcard price="$2131" text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum The first line of Lorem Ipsum."  star="*****" starnumber="89"/>
            </div>
            <div className="col">
                <Justbookedcard price="$1232" text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum The first line of Lorem Ipsum." star="*****" starnumber="90"/>
            </div>
            <div className="col">
                <Justbookedcard price="$2331" text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum The first line of Lorem Ipsum." star="*****" starnumber="95"/>
            </div>
        </>
    )
}
