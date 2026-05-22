import React, { useState } from "react";

// Import Navbar component
import Navbar from "./components/Navbar/Navbar"

// Import AOS animation library
import AOS from "aos";

// Import AOS styles
import "aos/dist/aos.css";

// Import Footer component
import Footer from "./components/footer/Footer";

// Import PopUp component
import PopUp from "./components/popup/PopUp";

// Import routing components
import { Route, Routes } from "react-router-dom";

// Import pages/components for routes
import ViewAllProducts from "./components/products/ViewAllProducts";

import Home from "../Home"

import MensCloths from "./components/products/mensCloths";

import WomensCloths from "./components/products/WomensCloths";

import TopRated from "./components/products/TopRated";

import ElectronicsProducts from "./components/products/ElectronicsProducts";

import ProductsDetails from "./components/products/ProductsDetails";

import Cart from "./components/Cart";

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import CheckOut from "./components/checkout/CheckOut";
function App() {

  // State to control popup visibility
  const [orderPopup, setOrderPopup] = useState(false);

  // Toggle popup open/close
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

  // Initialize AOS animations on component mount
  React.useEffect(() => {
    AOS.init({
      offset: 100,        // Offset from the original trigger point
      duration: 800,      // Animation duration
      easing: "ease-in-sine", // Animation easing
      delay: 100,         // Delay before animation starts
    });
    AOS.refresh(); // Refresh AOS after initialization
  }, []);

      //search bar
    const [searchTerm, setSearchTerm] = useState("");


  return (
    // Main app container with dark mode support
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored" />

      {/* Navbar with popup handler */}
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleOrderPopup={handleOrderPopup} />

      {/* Application Routes */}
      <Routes>

        {/* Home page */}
        <Route path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />

        {/* All products page */}
        <Route path="/products" element={<ViewAllProducts  searchTerm={searchTerm}/>} />

        {/* Men's clothing page */}
        <Route path="/mens" element={<MensCloths />} />

        {/* Women's clothing page */}
        <Route path="/womens" element={<WomensCloths />} />

        {/* Top rated products page */}
        <Route path="/top" element={<TopRated />} />

        {/* Electronics products page */}
        <Route path="/elctronics" element={<ElectronicsProducts />} />

        {/* Product details page (dynamic route by id) */}
        <Route path="/product/:id" element={<ProductsDetails />} />

        {/* cart page */}
        <Route path="/cart" element={<Cart />} />

        {/* checkout page */}
        <Route path="/checkout" element={<CheckOut />} />

              {/*search product */}

      </Routes>

      {/* Footer section */}
      <Footer />

      {/* Popup component */}
      <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

      
    </div>
  )
}

export default App