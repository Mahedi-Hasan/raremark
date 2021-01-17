import React from 'react'
import Headertop from './Headertop'
import Navbar from './Navbar'

export default function Header() {
    return (
        <div className="container-fluid p-0">
           <Headertop />
           <Navbar/>
        </div>
    )
}

