import React from 'react'
import {Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <div style={{display: "flex"}}>
        <nav>
          <ul>
            <li style={{display:"inline", marginRight:"20px"}}>
              <Link to="/">Main</Link>
            </li>
            <li style={{display:"inline"}}>
              <Link to="/Profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet/>
    </>
  )
};

export default Layout;