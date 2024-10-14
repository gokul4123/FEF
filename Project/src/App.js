import React from "react"
import {BrowserRouter, Routes,Route, Link} from "react-router-dom"
import UserProfiles from "./components/UserProfiles"
import Product from "./components/Product"
import "./App.css"

function App() {
  
<BrowserRouter></BrowserRouter>
  return (
    <BrowserRouter>
      <div className="boxing">
        <div className="boxes">
          <Link to="/profile" className="links">User Profiles </Link>
        </div>
        <div className="boxes">
          <Link to="/product" className="links">Update Product Info</Link>
        </div>
      </div>
      <Routes>
        <Route path="/profile" element={<UserProfiles/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
      </Routes>
    
    </BrowserRouter>
      
      
    
    
  )
}

export default App;