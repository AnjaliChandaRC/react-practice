import React, { useState } from "react";

const FormInput = () => {
  const [name, setName] = useState();
  const [lastname, setLastName] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfiempassword] = useState();
  const [showData, setShowData] = useState([]);

  const Submitbtn = () => {
    let Data = [];
    Data = showData.push(name, lastname, password, confirmpassword);
    console.log("showData", showData);
  };
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-sm-8 col-lg-4">
              <h3 className="fs-1 fw-bold text-success text-center">Form</h3>
              <div className="input_parent_bg mt-4">
                <div>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="w-100 input_bg"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="mt-3">
                  <input
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-100 input_bg"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mt-3">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-100 input_bg"
                    type="text"
                    placeholder="Password"
                  />
                </div>
                <div className="mt-3">
                  <input
                    onChange={(e) => setConfiempassword(e.target.value)}
                    className="w-100 input_bg"
                    type="text"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="text-center mt-4">
                  <button onClick={() => Submitbtn()} className="common_btn">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormInput;
