import React from "react"
import {BrowserRouter as Router, Routes, Route, Link}from "react-router-dom"
import Features from "./Features"
import Pricing from "./Pricing"
import UseItems from "./UseItems"
import RequestDemo from "./RequestDemo"
import HomePage from "./HomePage"
import DropDownMenu from "./DropDownMenu"
import ContactUs from "./ContactUs"
import Jobs from "./Jobs"
import Support from "./Support"
import "./HomePage.css"

import "./App.css"
import"./styles.css"
function App(){
  const dropdownItems=[
    {to:"/ContactUs",label:"Contact Us"},
    {to:"/Support",label:"Support"},
    {to:"/Jobs",label:"Jobs"},
  ];
  return(
    <>
    <Router>
      <div className="App">
        <nav className="navigation">
          <ul className="li-items">
            <li><Link to="/HomePage">Home</Link></li>
            <li><Link to="/Features">Features</Link></li>
            <li><Link to="/Pricing">Pricing</Link></li>
            <li><Link to="/UseItems">UseItems</Link></li>
            <li><Link to="/RequestDemo">RequestDemo</Link></li>
            <li> 
              <DropDownMenu items={dropdownItems}/>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/HomePage" element={<HomePage/>}></Route>
        <Route path="/Features" element={<Features/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/UseItems" element={<UseItems/>}/>
        <Route path="/RequestDemo" element={<RequestDemo/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Support" element={<Support/>}/>
        <Route path="/Jobs" element={<Jobs/>}/>
        
        
        
      </Routes>
    </Router>
    </>
    
  )

}
export default App;