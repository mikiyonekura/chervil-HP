import './App.css';
import "./slide.css"
import { useState,useEffect } from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage';
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodayMenu from "./components/TodayMenu";
import Parking from "./components/Parking";
import Signin from "./components/Signin";
import Form from "./components/Form";
import Login from './components/Login';
import SignUp from './components/Singup';
import TodayMenuAd from './components/TodayMenuAd';



function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="Routes">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/TodayMenu" element={<TodayMenu />} />
            <Route path="/TodayMenuAd" element={<TodayMenuAd />} />
            <Route path="/Parking" element={<Parking />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="Signup" element={<SignUp />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
  
        <Footer />
      </div>
    </Router>
  );
}

export default App;


