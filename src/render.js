import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addTag, deleteTag, generateIdea} from "./state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let render = (state) => {
    root.render(
        <React.StrictMode>
            <App sideBar={state.sideBar} addTag={addTag} deleteTag={deleteTag}
                 idea={state.idea} generateIdea={generateIdea}/>
        </React.StrictMode>
    )
}