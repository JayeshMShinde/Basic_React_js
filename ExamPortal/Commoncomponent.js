
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AdminMain } from "./Admin/AdminMainComponent";
import { AllExam } from "./Admin/AllExam";
import { AllStudent } from "./Admin/AllStudent";
import { Contentques } from "./Admin/Content";
import { QuestionComp } from "./Admin/QuestionComp";
import { TopicComp } from "./Admin/Topic";
import { LoginComp } from "./Login/Logincomponent";
import { StudentMaincomp } from "./Student/StudentMainComp";

export const CommonComponent = () => {
    const [divstyle] = useState({ "height": "100vh", "width": "100%" });
    
    return (
        <div>
            <Router>
                <div style={divstyle}>
                    <Routes>
                        <Route path="" element={<LoginComp />} />
                        <Route path="admin" element={<AdminMain />}>
                            {/* student */}
                            {/* <Route path="dashboard" element={<Ad />} /> */}
                            <Route path="all-student" element={<AllStudent />} />
                            <Route path="all-exam" element={<AllExam />} />
                            {/* Master */}
                            <Route path="topic" element={<TopicComp />} />
                            <Route path="content" element={<Contentques />} />
                            <Route path="content-question" element={<QuestionComp />} />
                        </Route>
                        <Route path="">

                        </Route>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}