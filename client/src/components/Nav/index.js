import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {



    return (

        <div className="row">
            <div className="col-3">
                <div className="container">
                    <div className="row shadow p-3 m-3 rounded list-border">
                        <div className="col">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link
                                        to="/profile"
                                        className={
                                            window.location.pathname === "/profile" || window.location.pathname === "/about"
                                                ? "nav-link active"
                                                : "nav-link"
                                        }
                                    >Profile
                                </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/dashboard"
                                        className={
                                            window.location.pathname === "/dashboard" || window.location.pathname === "/about"
                                                ? "nav-link active"
                                                : "nav-link"
                                        }
                                    >Dashboard
                                </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/searchrecipe"
                                        className={
                                            window.location.pathname === "/searchrecipe" || window.location.pathname === "/about"
                                                ? "nav-link active"
                                                : "nav-link"
                                        }
                                    >Search Recipes
                                </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/addrecipe"
                                        className={
                                            window.location.pathname === "/addrecipe" || window.location.pathname === "/about"
                                                ? "nav-link active"
                                                : "nav-link"
                                        }
                                    >Add Recipe
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )



}
export default Nav