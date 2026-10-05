import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home"
import Customers from "./pages/Customers"
import Enterprise from "./pages/Enterprise"
import Pricing from "./pages/Pricing"
import ContactUs from "./pages/ContactUs"
import ScrollToTop from "./components/ScrollTop"


function App() {
  

  return (
    <>
<BrowserRouter>
<ScrollToTop />
<Routes>
  <Route element={<Layout/>}>
   <Route path="/" element={<Home />} />
  <Route path="/customers" element={<Customers />} />
  <Route path="/enterprise" element={<Enterprise />} />
  <Route path="/pricing" element={<Pricing />} />
  <Route path="/contactUs" element={<ContactUs />} />
  
  </Route>
</Routes>
</BrowserRouter>
    </>
    )
  }
export default App
