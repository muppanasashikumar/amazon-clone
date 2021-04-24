import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                Dropdown
            </div>
            <div className="nav__right">
            <div className="navbar__container">
                <ul>
                    <li>Gift Cards</li>
                    <li>Amazon Pay</li>
                    <li> Amazon bussiness</li>
                    <li>Kindle ebooks</li>
                </ul>
            </div>
                
            </div>
        </div>
    )
}

export default Navbar
