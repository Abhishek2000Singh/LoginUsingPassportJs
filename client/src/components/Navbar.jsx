import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ user }) {
    const logout= ()=>{
        window.open("http://localhost:5000/auth/logout","_self");
    }
    return (
        <div className='navbar'>
            <span className="logo">
                <Link to="/">Auth App</Link>
            </span>
            {user ? (

                <ul className="list">
                    <li className="listItem">
                        <img src={user.photos[0].value}
                            className="avatar"
                            alt="" />
                    </li>
                    <li className="listItem">{user.displayName}</li>
                    <li className="listItem" onClick={logout}>Logout</li>

                </ul>
            ) : (<Link to="/login">Login</Link>)
            }
        </div>
    )
}
