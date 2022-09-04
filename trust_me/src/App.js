import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import UserHomepage from './pages/UserHomepage';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Buypage from './pages/Buypage';
import Dashboard from './pages/MyDashboard';
import Home from './pages/Home';

export default function App()
{
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/signin" element={ <SignIn/> }/>
        <Route path="/panel" element={ <UserHomepage></UserHomepage>}/>
        <Route path="/signup" element={<SignUp></SignUp>}/>
        <Route path="/buypage" element={<Buypage></Buypage>}/>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
      </Routes>
    </div>
  );
}