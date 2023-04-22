import React, { useState } from "react";
import "./AddReaminder.css"
import DropdownMenu from "./DropdownMenu.jsx";
import "./SearchBar";
import SearchBar from "./SearchBar";
import Popup from "./Popup";

 

export default function AddReaminder() {
    
    return (
        <>
        <div>
            <h1>Add Reaminder</h1>
            <div>
                <SearchBar />
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