import React from 'react'
import Clientcomplements from './Clientcomplements/Clientcomplements'
import Justbooked from './Justbooked/Justbooked'
import Places from './Places/Places'

function Mainbody() {
    return (
        <div className="container">
            <div className="row">
            <Clientcomplements />
               <Justbooked />

               <Places />

            </div>
            
        </div>


    )
}
export default Mainbody;
