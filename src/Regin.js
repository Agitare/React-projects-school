import React, { Component } from "react";

class Login extends Component {
    render() {
        return(
            <div>
                <h2>Rekisteröidy</h2>
                <form>
                <input type="text" id="firstname" name="firstname" placeholder="Etunimi"></input>
                <br></br>
                <input type="text" id="lastname" name="lastname" placeholder="Sukunimi"></input>
                <br></br>
                <input type="text" id="email" name="email" placeholder="Sähköposti"></input>
                <br></br>
                <br></br>
                <input type="text" id="username" name="username" placeholder="Käyttäjänimi"></input>
                <br></br>
                <input type="text" id="username" name="username" placeholder="Salasana"></input>
                <br></br>
                <input type="text" id="username2" name="username2" placeholder="Salasana uudelleen"></input>
                <br></br>
                <button type="button">Rekisteröidy</button>
                </form>
            </div>
        )
    }
}

export default Login;