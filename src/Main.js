import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Content from "./Content";
import Birds from "./Birds";
import Login from "./Login";

class Main extends Component {
    render(){
        return (
            <HashRouter>
                <div>
                    <div className="topbar">
                        <h1>Lintubongarit</h1>
                        <li><NavLink to="/Login">Kirjaudu sisään</NavLink></li>
                        <li><NavLink to="/Login">Rekisteröidy</NavLink></li>
                    </div>

                    <ul className="navbar">
                        <li><NavLink exact to="/">Koti</NavLink></li>
                        <li><NavLink to="/Content">Kontentti</NavLink></li>
                        <li><NavLink to="/Birds">Lintu</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/Content" component={Content}/>
                        <Route path="/Birds" component={Birds}/>
                        <Route path="/Login" component={Login}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;