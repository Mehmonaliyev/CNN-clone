import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/more.css'
function More() {
    return (
        <>
            <div className='hover_more'>
                   More
                <ul className="nav flex-column bg-dark hover_none ">
                    <li className="nav-item">
                        <NavLink className='nav-link' to="/China">
                            China
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to="/Europa">
                            Europa
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to="/India">
                            India
                        </NavLink>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default More
