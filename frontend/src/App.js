import './App.css';
import "./slide.css"
import { useState,useEffect } from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage';
import Footer from "./components/parts/Footer";
import Header from "./components/parts/Header";
import Parking from "./components/Parking";
import Signin from "./components/signin/Signin";
import Form from "./components/trash/Form";
import Login from './components/signin/Login';
import SignUp from './components/signin/Singup';
import TodayMenuFirebase from './components/todaymenu/TodayMenuFirebase';
import Sat from './components/Sat';



function App() {

  return (
    <Router>
      <div className="App">
        
        <Header />
        <div className="Routes">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/TodayMenuFirebase" element={<TodayMenuFirebase />} />
            <Route path="/Parking" element={<Parking />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="Signup" element={<SignUp />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Sat" element={<Sat />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
  
        <Footer />
      </div>
    </Router>
  );
}

export default App;


