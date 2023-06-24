import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { TopNavBar } from "../TopNavbar";
import { SideBar } from "./Sidebar";

export const AdminMain = () => {
    const [divstyle] = useState({ "min-height": "450px", width: "80%" });
    const [divheightStyle] = useState({ height: "100%" });
    const [divwidthStyle] = useState({ width: "100%" });
    return (
        <div>
            <div>
                {/* Header Section  */}
                <TopNavBar />
                {/* Middle Section */}
                <div style={divstyle}>
                    <div className="row" style={divstyle}>
                        <div className="col-md-3">
                            <div className=" container bg-dark" style={divheightStyle}>
                                {/* 
                            <p style={divcolor}>
                                &nbsp;
                                <hr />
                                <b style={fontsize}>Student Section</b>
                                <hr />
                            </p>
                            <ul className="list-group">
                                <li className="list-group-item bg-dark">
                                    <Link to="/admin/dashboard" className="btn btn-primary text-light rounded-pill" style={linkcol}>
                                        <i className="bi bi-house-door-fill"></i>&nbsp;<b>Dashboard</b></Link>
                                </li>
                                <li className="list-group-item bg-dark">
                                    <Link to="/admin/all-student" className="btn btn-danger text-light rounded-pill" style={linkcol}>
                                        <i className="bi bi-person-fill"></i>&nbsp;<b>All Student</b></Link>
                                </li>
                                <li className="list-group-item bg-dark">
                                    <Link to="/admin/all-exam" className="btn btn-danger text-light rounded-pill" style={linkcol}>
                                        <i className="bi bi-clipboard2-fill"></i>&nbsp;<b> All Exam</b></Link>
                                </li>
                            </ul>
                            <p style={divcolor}>
                                <hr />
                                <b style={fontsize}>Master Section</b>
                                <hr />
                            </p>
                            <ul className="list-group">
                                <li className="list-group-item bg-dark">
                                    <Link to="/admin/topic" className="btn btn-warning text-dark rounded-pill" style={linkcol}>
                                        <i className="bi bi-textarea-t"></i>&nbsp;<b>Topic</b></Link></li>
                                <li className="list-group-item bg-dark">
                                    <Link to="/admin/content" className="btn btn-warning text-dark rounded-pill" style={linkcol}>
                                        <i className="bi bi-text-left"></i>&nbsp;<b>Content</b></Link></li>
                                <li className="list-group-item bg-dark">
                                    <Link to="/admin/content-question" className="btn btn-warning text-dark rounded-pill" style={linkcol}>
                                        <i className="bi bi-file-earmark-text-fill"></i>&nbsp;<b>Content Question</b></Link></li>
                            </ul>
                            <p style={divcolor}>
                                <hr />
                            </p>
                            </div>*/}
                                <SideBar />
                            </div>
                            
                        </div>
                        <div className="col-md-9">
                                <Outlet></Outlet>
                            </div>
                    </div>
                </div>
                {/* Footer Section */}
                <div className="col-md-12" style={divwidthStyle}>
                    <div style={divheightStyle}>
                        <footer className="bg-dark text-center text-lg-start">
                            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                                <div>
                                    <a href="https://facebook.com" className="me-5 link-light">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="https://twitter.com" className="me-5 link-light">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="https://google.com" className="me-5 link-light">
                                        <i className="bi bi-google"></i>
                                    </a>
                                    <a href="https://instagram.com" className="me-5 link-light">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </div>
                                <div className="text-center p-2 text-light">
                                    ©2023 Copyright:
                                    <a
                                        className="text-light"
                                        href="https://github.com/JayeshMShinde"
                                    >
                                        <i>JayeshShidne</i>
                                    </a>
                                    &nbsp; All Rigth Resevered ❤
                                </div>
                            </section>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};
