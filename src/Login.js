import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Login extends Component {
    render() {
        return(
            <div>
                <h2>Kirjaudu sisään</h2>
                <form>
                <label for="username">Käyttäjänimi: </label>
                <input type="text" id="username" name="username"></input>
                <br></br>
                <label for="username">Salasana: </label>
                <input type="text" id="username" name="username"></input>
                <br></br>
                <button type="button">Kirjaudu sisään</button>
                </form>
                <li className="login"><NavLink to="/Regin">Rekisteröidy...</NavLink></li>
            </div>
        )
    }
}

export default Login;