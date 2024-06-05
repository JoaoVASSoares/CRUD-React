import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import React from "react";
import {BrowserRouter} from "react-router-dom"

import Logo from "../components/templates/logo/Logo";
import Nav from "../components/templates/nav/Nav";
import Routes from "./Routes";
import Footer from "../components/templates/footer/Footer";


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
       <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div>
       </BrowserRouter>
    )
}