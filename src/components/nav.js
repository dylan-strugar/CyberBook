import React from "react";
import '../App.css';

const Nav = (props) => {
    return (
        <div id="nav">
            <h1>CYBER FACEBOOK</h1>
            <button onClick={props.goToHome}>Home</button>
            <button>Profile</button>
        </div>
         )
}

export default Nav;