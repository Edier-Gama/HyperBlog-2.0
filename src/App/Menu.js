import React from "react";
import {NavLink} from "react-router-dom";
import { useAuth } from "../Auth/auth";
import './App.css'


function Home() {
    const auth = useAuth()
    return(
        <header>
        <nav>
        <ul className="navbar">
        {routes.map(route => {
            if(route.private && !auth.user) return null
            if(route.to == '/login' && auth.user) return null  
            return(
            <li key={route.to} className='nav-links'>
                <NavLink to={route.to}>{route.text}</NavLink>
            </li>
            )
        })}
        </ul>
        </nav>
        </header>
    )
}
const routes = []
routes.push({
    to: '/',
    text: 'Home',
    private: false
})
routes.push({
    to: '/profile',
    text: 'Profile',
    private: true
})
routes.push({
    to: '/blog',
    text: 'Blog',
    private: true
})
routes.push({
    to: '/login',
    text: 'Login',
    private: false,
    loged: false
})
routes.push({
    to: '/Logout',
    text: 'Logout',
    private: true
})

export {Home}