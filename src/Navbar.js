import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";


function Navbar() {
    return (
        
        <nav className="nav">
            <Link to="site-title">Medicine Expiry Reaminder</Link>
            <ul>
                <CustomLink to="/Home">Home</CustomLink>
                <CustomLink to="/AddReaminder">Add Reaminder</CustomLink>
                <CustomLink to="https://www.google.com/maps/search/nearby+ngos/@23.177035,72.644708,14z/data=!3m1!4b1">Nearby NGO's</CustomLink>
                <CustomLink to="/MYLists">My Lists</CustomLink>
                <CustomLink to="/Login">Login/Sign-Up</CustomLink>
                
            </ul>
        </nav>
 
    )
}
 
function CustomLink({to,children, ...props}) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end:true}) 

    return(
        <li className={isActive  === to ? "active": ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
        </li>
    );
}
export default Navbar;

