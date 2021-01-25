import axios from "axios";
import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
// import {UserContext} from "../Context/UserContext";
import "./style.css";

function Header() {
    // const {emailID, setemailID} = useContext(UserContext)
    const history = useHistory(); 

    const logout = (event) => {
        event.preventDefault(); 
        console.log("Clicked Logout"); 
        axios({
            method: "GET",
            withCredentials: true,
            url: "/api/users/logout",
        }).then((res) => {
            
            console.log(res);
            history.push("/")
        })
    };
    


    return (
        <>
            <nav className="navbar navbar-light">
                <div className="navbar-brand">Welcome!</div>
                <form class="form-inline">
                    <button onClick={logout}  class="btn btn-outline-info my-2 my-sm-0" type="submit">Logout</button>
                </form>
            </nav>
        </>

    )



}
export default Header 
