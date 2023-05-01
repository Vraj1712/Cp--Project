import React, { useState } from "react";
import "./AddReaminder.css"
import DropdownMenu from "./DropdownMenu.jsx";
import "./SearchBar";
import "./Screen Shot 2023-04-24 at 10.00.19 AM.jpg"
import SearchBar from "./SearchBar";
import Popup from "./Popup";
import Img from "./Img";

 

export default function AddReaminder() {
    
    return (
        <>
        <div>
            
            <h1>Add Reaminder</h1>
            <div>
                <SearchBar />
            </div>
            <div>
                <Img />
            </div>
            <div>
                <DropdownMenu  />
            </div>
            <div>
                <Popup />
            </div>
            </div>

        </>
  
    );
}