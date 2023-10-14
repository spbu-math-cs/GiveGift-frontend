import React from 'react';
// import {useState, useEffect} from 'react'
import './App.css';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Idea from "./Idea/Idea";
import {BrowserRouter, Route} from "react-router-dom";

function App() {

    /*const [data, setData] = useState([{}])

    useEffect(() => {
      fetch("/app").then(
        res => res.json()
      ).then(
        data => {
          setData(data)
          console.log(data)
        }
      )
    }, [])*/

    // BrowserRouter потом подкрутим
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <Idea/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
