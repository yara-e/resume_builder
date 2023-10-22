import React, { useState } from "react";
import Education from "./Education";
import Experiences from "./Experience";
import PersonalDetails from "./PersonalDetails";
import Project from "./Project";

import axios from "axios";
import { saveAs } from "file-saver";
import Success from "./Succes";
const Form = () => {
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        skills: "",

        exp1_org: "",
        exp1_pos: "",
        exp1_desc: "",
        exp1_dur: "",


        proj1_title: "",
        proj1_link: "",
        proj1_desc: "",
        proj2_title: "",
        proj2_link: "",
        proj2_desc: "",

        edu1_school: "",
        edu1_year: "",
        edu1_qualification: "",
        edu1_desc: "",



    });

    const [page, setPage] = useState(0);
    const FormTitle = [
        "Personal Details",
        "Education",
        "Experience",
        "Projects",

    ];

    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalDetails formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <Education formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
            return <Experiences formData={formData} setFormData={setFormData} />;
        } else if (page === 3) {
            return <Project formData={formData} setFormData={setFormData} />;
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-center">
                <h1 className="text-center">{FormTitle[page]}</h1>
            </div>

            <div>{PageDisplay()}</div>
            <div className="d-flex justify-content-center gap-3 py-5">
                <button
                    className="btn  "
                    disabled={page === 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1);
                    }}
                >
                    Prev
                </button>
                <button
                    className="btn  "
                    onClick={() => {
                        if (page === FormTitle.length - 1) {
                            axios
                                .post("http://localhost:4000/create-pdf", formData)
                                .then(() =>
                                    axios.get("http://localhost:4000/fetch-pdf", {
                                        responseType: "blob",
                                    })
                                )
                                .then((res) => {
                                    const pdfBlob = new Blob([res.data], {
                                        type: "application/pdf",
                                    });
                                    setSuccess(true && res.status === 200);
                                    saveAs(pdfBlob, "Resume.pdf");
                                });
                        } else {
                            setPage((currPage) => currPage + 1);
                        }
                    }}
                >
                    {page === FormTitle.length - 1 ? "Download Pdf" : "Next"}
                </button>
            </div>
            {success && <Success />}
        </div>
    );
};

export default Form;