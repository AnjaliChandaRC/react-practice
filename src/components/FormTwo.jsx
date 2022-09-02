import React, { useState } from "react";
import { EyeClose, EyeIcon } from "../common/Icons";

const FormTwo = () => {
  const [formvalue, setFormvalue] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState(false);
  const [showHidePassword, setShowHidePassword] = useState(false);
  const [showConfirmHidePassword, setShowConfirmHidePassword] = useState(false);

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const SubmitData = (e) => {
    setError(true);
    e.preventDefault();
    if (
      formvalue.name !== "" &&
      formvalue.lastname !== "" &&
      formvalue.email !== "" &&
      formvalue.password !== "" &&
      formvalue.confirmpassword !== "" &&
      regex.test(formvalue.email)
    ) {
      setFormvalue({
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
      setError(false);
      console.log("formvalue", formvalue);
    }
  };
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-sm-8 col-lg-4">
              <h3 className="fs-1 fw-bold text-success text-center">
                Practice Form
              </h3>
              <div className="input_parent_bg mt-4">
                <div>
                  <input
                    className="w-100 input_bg color_pink"
                    type="text"
                    placeholder="Name"
                    value={formvalue.name}
                    onChange={(e) =>
                      setFormvalue({ ...formvalue, name: e.target.value })
                    }
                  />
                  <p className="text-danger mb-0 fw-bold">
                    {error && formvalue.name === ""
                      ? "Name is Required"
                      : formvalue !== ""}
                  </p>
                </div>
                <div className="mt-3">
                  <input
                    className="w-100 input_bg color_pink"
                    type="text"
                    placeholder="Last Name"
                    value={formvalue.lastname}
                    onChange={(e) =>
                      setFormvalue({ ...formvalue, lastname: e.target.value })
                    }
                  />
                  <p className="text-danger mb-0 fw-bold">
                    {error && formvalue.lastname === ""
                      ? "Last Name is Required"
                      : formvalue !== ""}
                  </p>
                </div>
                <div className="mt-3">
                  <input
                    className="w-100 input_bg color_pink"
                    type="email"
                    placeholder="Email"
                    value={formvalue.email}
                    onChange={(e) =>
                      setFormvalue({ ...formvalue, email: e.target.value })
                    }
                  />
                  {error && formvalue.email === "" ? (
                    <p className="text-danger fw-bold">Email is required</p>
                  ) : error && regex.test(formvalue.email) === false ? (
                    <p className="text-danger fw-bold">Invalid email</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mt-3">
                  <div className="mb-3 position-relative">
                    <div className="d-flex">
                      <input
                        className="w-100 input_bg color_pink"
                        type={showHidePassword ? "text" : "password"}
                        placeholder="Password"
                        value={formvalue.password}
                        onChange={(e) =>
                          setFormvalue({
                            ...formvalue,
                            password: e.target.value,
                          })
                        }
                      />
                      <div
                        className="position-absolute eye_position cursor"
                        onClick={() => setShowHidePassword(!showHidePassword)}
                      >
                        {showHidePassword ? <EyeIcon /> : <EyeClose />}
                      </div>
                    </div>
                    <p className="text-danger mb-0 fw-bold">
                      {error && formvalue.password === ""
                        ? "Password is Required"
                        : formvalue !== ""}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="mb-3 position-relative">
                    <div className="d-flex">
                      <input
                        className="w-100 input_bg color_pink"
                        type={showConfirmHidePassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={formvalue.confirmpassword}
                        onChange={(e) =>
                          setFormvalue({
                            ...formvalue,
                            confirmpassword: e.target.value,
                          })
                        }
                      />
                      <div
                        className="position-absolute eye_position cursor"
                        onClick={() =>
                          setShowConfirmHidePassword(!showConfirmHidePassword)
                        }
                      >
                        {showConfirmHidePassword ? <EyeIcon /> : <EyeClose />}
                      </div>
                    </div>
                    <p className="text-danger mb-0 fw-bold">
                      {error && formvalue.confirmpassword === ""
                        ? "Confirm Password is Required"
                        : formvalue.confirmpassword === "" &&
                          formvalue.password === ""
                        ? ""
                        : formvalue.confirmpassword !== "" &&
                          formvalue.confirmpassword !== formvalue.password
                        ? "Password Does not match"
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button className="common_btn" onClick={(e) => SubmitData(e)}>
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

export default FormTwo;
