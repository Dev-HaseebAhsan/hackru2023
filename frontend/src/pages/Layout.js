import React from 'react'
import {Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <div style={{display: "flex", backgroundColor:"var(--bg1)"}}>
        <nav>
          <ul>
            <li style={{display:"inline", marginRight:"20px"}}>
              <Link to="/">Main</Link>
            </li>
            <li style={{display:"inline", marginRight:"20px"}}>
              <Link to="/create-account">CreateAccount</Link>
            </li>
            <li style={{display:"inline", marginRight:"20px"}}>
              <Link to="/profile">Profile</Link>
            </li>
            <li style={{display:"inline"}}>
              <Link to="/creator">Creator</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet/>
    </>
  )
};

export default Layout;