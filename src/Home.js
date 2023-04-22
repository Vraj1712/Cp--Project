import React from "react"
import "./Home.css";
import"./pexels-pixabay-159211.jpg";
export default function Home() {
    return(
        
           
           <div>
                <h1>
                    Good Morning Laxamn
                </h1>
                <div className="checkbox-container">
                    <label className="checkbox-label">
                        <input type="checkbox" />
                        Vitamin C
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" />
                        Crocin
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" />
                        Paracetamol
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" />
                        Vitamin D
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" />
                        Vitamin E
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" />
                        Vibact
                    </label>
                    </div>

                    <div>
                        <h1>
                            About to Expire
                        </h1>
                        <div className="square-container">
                            <div className="square"><div className="inner-square"></div>
                            <p className="text"> Medicine name: Paracetamol</p>
                            <p className="tex1"> Expiry: 2 Weeks</p></div>
                            <div className="square"><div className="inner-square"></div></div>
                            <div className="square"><div className="inner-square"></div></div>
                            <div className="square"><div className="inner-square"></div></div>
                        </div>
                        
                    </div>
                    <div>
                        <h1>
                            My Lists
                        </h1>
                        <div className="square-container1">
                            <div className="square1">
                                <p className="text3">Add a new List</p>
                            </div>
                            <div className="square1">
                                <p className="text3">Allergy Meidicine</p>
                            </div>
                            <div className="square1">
                                <p className="text3">Pain Medicine</p>
                            </div>
                            <div className="square1">
                                <p className="text3">Daily Use Medicine</p>
                            </div>
                        </div>
                    </div>
                </div>            
                            
                            
                  
                    
                
            
    );
}

          
            
        

        
        
