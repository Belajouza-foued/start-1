import React from "react";
import {Outlet } from "react-router-dom";



const Navbar = () => {
    return(
     
        <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <ul>
    <li>
        fofo
    </li>
    <li>
        samir
    </li>
    <li>
        hama
    </li>
  </ul>
</nav>
<Outlet/>
        </>
    )
}
export default Navbar;