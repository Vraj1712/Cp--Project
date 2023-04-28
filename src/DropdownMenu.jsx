//
/*'function DropdownMenu({Selected, setSelected}) {
    const [isActive, setIsActive ] = useState(false);
    const options = ['React', 'Vue', 'Angular']
    return(
        <div className="Dropdown">
            <div className="Dropdown-btn" onClick={e => setIsActive(!isActive)}>{selected} 
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
            <div className="Dropdown-content">
                {options.map(option => (
                    <div 
                        onClick={(e) => 
                            setSelected(option);
                            setIsActive(false); 
                }
                    className="Dropdown-item">{option}</div>

                ))}
               
            </div>
            )};
        </div>
    )
}



export default DropdownMenu; */

/* import { useState } from "react";
function DropdownMenu ({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ["react", "Monkry"]
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((options) => (
                        <div 
                        onClick={(e) => {
                            setSelected(options);
                            setIsActive(false);
                        }}
                        className="dropdown-item"
                        >
                            {options}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default DropdownMenu;
*/


import React from 'react';

import './DropdownMenu.css';

export default function DropdownMenu() {
    
  return (
    <div className="rectangle-form">
      <label htmlFor="dropdown1">Reaminder Frequency</label>
      <select id="dropdown1" name="dropdown1">
        <option value="option1">Daily</option>
        <option value="option2">Weekly</option>
        <option value="option3">Monthly</option>
      </select>

      <label htmlFor="dropdown2">Do you like to donate medicine</label>
      <select id="dropdown2" name="dropdown2">
        <option value="option1">Yes</option>
        <option value="option2">NO</option>
      </select>

      <label htmlFor="dropdown3">Medicine Expiry Date</label>
      <select id="dropdown3" name="dropdown3">
        <option value="option1">Calendar</option>
        </select>
      <label htmlFor="dropdown4">Reaminder Type</label>
      <select id="dropdown4" name="dropdown4">
        <option value="option1">Notification</option>
      </select>
    </div>
  );
}



