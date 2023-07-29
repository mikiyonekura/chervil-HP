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



function App() {
  const [message, setMessage] = useState('');
  
  /*
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []) */

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="Routes">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/TodayMenu" element={<TodayMenu />} />
            <Route path="/Parking" element={<Parking />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="Signup" element={<SignUp />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
        {/*<p>{message}</p>*/}
        <Footer />
      </div>
    </Router>
  );
}

export default App;


