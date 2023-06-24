import React, { useState } from "react";
import './sidebar.css';
import { Link } from "react-router-dom";
export const SideBar = () => {
    const [textdeco] = useState({
        color: "white",
        "text-decoration": "none",
        cursor: "pointer",
        width: "100%"
    });
    const [backcolor] = useState({
        "background-color": "cadetblue",
        "text-align": "rigth",
        "min -width":"100%",
        
    })
    return (
        <div>
            <div class="container-fluid bg-dark" style={{"min-height":"80vh"}}>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li>
                        <a style={textdeco} href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-person"></i> <span class="ms-1 d-none d-sm-inline">Student Section</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu" style={backcolor}>
                            <li class="w-100" style={backcolor}>
                                {/* <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a> */}
                                <Link to="/admin/all-student" className="Clicked nav-link px-0 btn btn-warning" style={textdeco}>
                                        <i className="bi bi-person-circle"></i>&nbsp;All Student</Link>
                            </li>
                            <li style={backcolor}>
                                <Link to="/admin/all-exam" className="Clicked nav-link px-0 btn btn-warning" style={textdeco}>
                                <i className="bi bi-award-fill"></i>&nbsp;All Exam</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu2" style={textdeco}  data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-gem"></i> <span class="ms-1 d-none d-sm-inline">Master Section</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100" style={backcolor}>
                                <Link to="/admin/topic" className="Clicked nav-link px-0 btn btn-warning" style={textdeco}>
                                <i className="bi bi-file-text"></i>&nbsp;Topic</Link>
                            </li>
                            <li class="w-100" style={backcolor}>
                                <Link to="/admin/content" className="Clicked nav-link px-0 btn btn-warning" style={textdeco}>
                                <i className="bi bi-justify"></i>&nbsp;Content</Link>
                            </li>
                            <li class="w-100" style={backcolor}>
                                <Link to="/admin/content-question" className="Clicked   nav-link px-0 btn btn-warning" style={textdeco}>
                                <i className="bi bi-menu-button-wide-fill"></i>&nbsp;Content Question</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr />
                {/* <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}