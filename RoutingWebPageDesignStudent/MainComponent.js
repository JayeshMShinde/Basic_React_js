import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { DashboardCom } from "./DashboardComponent";
import { AllExamCom } from "./AllExamComponent";
import { AllStudCom } from "./AllStudentComponent";
import { ContentCom } from "./ContentComponent";
import { ContentQueCom } from "./ContentQueComponent";
import { InterviewQueCom } from "./InterviewQueComponent";
import { QuelvlCom } from "./QuestionLvlComponent";
import { RoleCom } from "./RoleComponent";
import { TopicCom } from "./TopicComponent";

export const MainComWebDes = () => {
    const [divstyle] = useState({ "min-height": "500px", "width": "100%" });
    const [divheightStyle] = useState({ "height": "100%" });
    const [divwidthStyle] = useState({ "width": "100%" });
    const [divcolor] = useState({ "color": "white" });
    const [linkcol] = useState({ "color": "#00A0C6", "text-decoration": "none", "cursor": "pointer" ,"width":"100%"});
    const [stylefooter] = useState({ "background-color": "rgba(0, 0, 0, 0.2)", "width": "100%" });
    return (
        <div>
            <Router>
                {/* Header Section  */}
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a href="#" className="navbar-brand">CIIT</a>
                            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse1">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse1">
                                <div className="navbar-nav ms-auto">
                                    <a href="#Login" className="nav-item nav-link"><i className="bi bi-person-circle">&nbsp;</i>Login</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* Middle Section */}
                <div style={divstyle}>
                    <div className="row">
                        <div className="col-md-3">
                            <div className=" container bg-dark" style={divheightStyle}>
                                <hr/>
                                <p style={divcolor}>
                                    
                                    Student Section
                                    <hr />
                                </p>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <Link to="/dashboard" className="btn btn-primary text-light" style={linkcol}><i className="bi bi-house-door-fill"></i>&nbsp;Dashboard</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/all-student" className="btn btn-dark text-light" style={linkcol}><i className="bi bi-person-fill"></i>&nbsp;All Student</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/all-exam" className="btn btn-dark text-light" style={linkcol}><i className="bi bi-clipboard2-fill"></i>&nbsp; All Exam</Link>
                                    </li>
                                </ul>
                                <p style={divcolor}>
                                    <hr />
                                    Master Section
                                    <hr />
                                </p>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <Link to="/topic" className="btn btn-dark text-light" style={linkcol}>
                                            <i className="bi bi-textarea-t"></i>&nbsp;Topic</Link></li>
                                    <li className="list-group-item">
                                        <Link to="/content" className="btn btn-dark text-light" style={linkcol}>
                                            <i className="bi bi-text-left"></i>&nbsp;Content</Link></li>
                                    <li className="list-group-item">
                                        <Link to="/content-question" className="btn btn-dark text-light" style={linkcol}>
                                        <i className="bi bi-file-earmark-text-fill"></i>&nbsp;Content Question</Link></li>
                                    <li className="list-group-item">
                                        <Link to="/interview-question" className="btn btn-dark text-light" style={linkcol}>
                                        <i className="bi bi-journal-richtext"></i>&nbsp;Interview Question</Link></li>
                                    <li className="list-group-item">
                                        <Link to="/question-level" className="btn btn-dark text-light" style={linkcol}>
                                        <i className="bi bi-journal-text"></i>&nbsp;Question Level</Link></li>
                                    <li className="list-group-item">
                                        <Link to="/role" className="btn btn-success text-light" style={linkcol}>
                                        <i className="bi bi-people-fill"></i>&nbsp;Role</Link></li>
                                </ul>
                                <p>
                                    &nbsp;

                                </p>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <Routes>
                                {/* student */}
                                <Route path="dashboard" element={<DashboardCom />} />
                                <Route path="all-student" element={<AllStudCom />} />
                                <Route path="all-exam" element={<AllExamCom />} />
                                {/* Master */}
                                <Route path="topic" element={<TopicCom />} />
                                <Route path="content" element={<ContentCom />} />
                                <Route path="content-question" element={<ContentQueCom />} />
                                <Route path="interview-question" element={<InterviewQueCom />} />
                                <Route path="question-level" element={<QuelvlCom />} />
                                <Route path="role" element={<RoleCom />} />
                            </Routes>
                        </div>

                    </div>
                </div>
                <p style={divcolor}>
                    <hr />
                </p>
                {/* Footer Section */}
                <div className="col-md-12" style={divwidthStyle}>
                    <div style={divheightStyle}>
                        <footer className="bg-dark text-center text-lg-start">
                            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                                <div className="me-5 d-none d-lg-block text-light">
                                    <span>Get connected with us on social networks:</span>
                                </div>
                                <div>
                                    <a href="https://facebook.com" className="me-4 link-secondary">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="https://twitter.com" className="me-4 link-secondary">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="https://google.com" className="me-4 link-secondary">
                                        <i className="bi bi-google"></i>
                                    </a>
                                    <a href="https://instagram.com" className="me-4 link-secondary">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </div>
                            
                            <div className="text-center p-3 text-light" style={stylefooter}>
                                ©2023 Copyright: &nbsp;
                                <a class="text-light" href="https://closetoparkarati.blogspot.com/">Close To Parkarati</a>
                            </div>
                            </section>
                        </footer>
                    </div>
                </div>
            </Router>
        </div>
    )
}