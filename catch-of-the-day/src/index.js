import React from "react"; // goes into node module folder. Imports entire react package
import { render } from "react-dom"; // Only imports a branch of react. Looking for a specific method (render method)
import Router from "./components/Router";
import "./css/style.css";


render(<Router />, document.querySelector("#main")); // where in html the React will go
// takes in jsx (similar to html), and the mounting point(the dom element). You can also use document.getElementById
