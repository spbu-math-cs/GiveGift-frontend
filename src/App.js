import React from 'react';
// import {useState, useEffect} from 'react'
import './App.css';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Idea from "./Idea/Idea";
// import {BrowserRouter} from "react-router-dom";

function App(props) {

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
        // <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar sideBar={props.sideBar} addTag={props.addTag} deleteTag={props.deleteTag}/>
                <div className="app-wrapper-content">
                    <Idea idea={props.idea} generateIdea={props.generateIdea}/>
                </div>
            </div>
        // </BrowserRouter>

    );
}

export default App;
