import React, { useState } from "react";
import { Link } from "react-router-dom";


export const TopNavBar = () => {
    const [divheightStyle] = useState({ "height": "100%" });
    const [divinputserch] = useState({ "height": "100%", "width": "250px" })
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a href="http://localhost:3000" className="navbar-brand" style={divheightStyle}>
                        &nbsp;
                        <b>CIIT</b>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse1">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse1">
                        <div className="navbar-nav ms-auto">
                            <div className="input-group" style={divinputserch}>
                                <input type="text" className="form-control rounded-pill" placeholder="Search" />
                                <button type="button" className="btn btn-primary rounded-pill"><i className="bi-search"></i></button>
                            </div>
                            &nbsp;
                            <Link to="/" className="nav-item nav-link"><i className="bi-person-plus-fill">&nbsp;</i>Sign Out</Link>
                            &nbsp;
                            <Link to="/" className="nav-item nav-link"><i className="bi-person-fill">&nbsp;</i>Sign In</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}