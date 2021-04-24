import React from 'react'
import './Sidebar.css'
import { slide as Menu } from 'react-burger-menu';

function Sidebar() {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/salads">
                Returns & Orders
            </a>
            <a className="menu-item" href="/pizzas">
                Your Prime
            </a>
            <a className="menu-item" href="/desserts">
                Basket
            </a>
        </Menu>
    )
}

export default Sidebar
