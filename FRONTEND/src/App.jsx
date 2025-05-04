import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Books from './pages/books';
import Login from './pages/login';
import About from './pages/about';
import Profile from './pages/profile';
import Bookdetails from './pages/bookdetails';
import Cartpage from './pages/cart';
import Signup from './pages/signup';
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/books/:id" element={<Bookdetails />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  );
  
}

export default App
