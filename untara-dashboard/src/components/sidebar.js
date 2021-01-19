import React from 'react'

import {NavLink, Link} from 'react-router-dom'

const Sidebar = (props) => {

    return (
        <div className="sidebar bg-dark">
            <div className="sidebar-body">
                <ul>
                    <NavLink to="/product" >
                        <li>Product</li>
                    </NavLink>
                    <NavLink to="/feedback">
                        <li >Feedback</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
} 

export default Sidebar