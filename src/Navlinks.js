import React from 'react'
import {Link} from 'react-router-dom'
import './Navlinks.css'
function Navlinks(){
    return(
        <div className="navlinks">
            <div className="navlinks__outer">
                <div className="navlinks__inner">
                <Link>Today's deals</Link>
                <Link>Customer Service</Link>
                <Link>Gift Cards</Link>
                <Link>Registory</Link>
                <Link>Sell</Link>
                </div>
            </div>
        </div>
    )
}
export default Navlinks