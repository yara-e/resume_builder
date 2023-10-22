import React from "react";

const Experiences = ({ formData, setFormData }) => {
    // exp1_org: "",
    //   exp1_pos: "",
    //   exp1_desc: "",
    //   exp1_dur: "",
    //   exp2_org: "",
    //   exp2_pos: "",
    //   exp2_des: "",
    //   exp2_dur: "",
    return (
        <div className="container">
            <form className="row g-3">
                <div className="col-md-6">
                    <label for="name" className="form-label">
                        Company Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={formData.exp1_org}
                        onChange={(e) => {
                            setFormData({ ...formData, exp1_org: e.target.value });
                        }}
                    />
                </div>

                <div className="col-md-6">
                    <label for="phone" className="form-label">
                        Job Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        value={formData.exp1_pos}
                        onChange={(e) => {
                            setFormData({ ...formData, exp1_pos: e.target.value });
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <label for="Email" className="form-label">
                        End date
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="Email"
                        value={formData.exp1_dur}
                        onChange={(e) => {
                            setFormData({ ...formData, exp1_dur: e.target.value });
                        }}
                    />
                </div>
                <div className="col-12">
                    <label for="edu1_desc" className="form-label">
                        Details
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="github"
                        value={formData.exp1_desc}
                        onChange={(e) => {
                            setFormData({ ...formData, exp1_desc: e.target.value });
                        }}
                    />
                </div>
                <h3>Enter another Experience if there </h3>
                <div className="col-md-6">
                    <label for="name" className="form-label">
                        Company Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={formData.exp2_org}
                        onChange={(e) => {
                            setFormData({ ...formData, exp2_org: e.target.value });
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <label for="Email" className="form-label">
                        Job Title
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="Email"
                        value={formData.exp2_pos}
                        onChange={(e) => {
                            setFormData({ ...formData, exp2_pos: e.target.value });
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <label for="phone" className="form-label">
                        End date
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        value={formData.exp2_dur}
                        onChange={(e) => {
                            setFormData({ ...formData, exp2_dur: e.target.value });
                        }}
                    />
                </div>

                <div className="col-12">
                    <label for="edu1_desc" className="form-label">
                        Details
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="github"
                        value={formData.exp2_desc}
                        onChange={(e) => {
                            setFormData({ ...formData, exp2_desc: e.target.value });
                        }}
                    />
                </div>
            </form>
        </div>
    );
};

export default Experiences;