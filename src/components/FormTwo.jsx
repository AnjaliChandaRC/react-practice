import React, { useState } from "react";
import { EyeClose, EyeIcon } from "../common/Icons";
import Table from "react-bootstrap/Table";

const FormTwo = () => {
  const [formvalue, setFormvalue] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState(false);
  const [showHidePassword, setShowHidePassword] = useState(false);
  const [showConfirmHidePassword, setShowConfirmHidePassword] = useState(false);
  const [tableValue, setTableValue] = useState([]);
  const emailregex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const usernameregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
  // const strongRegex =
  // /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
  const deleteHandler = (index) => {
    const tableValueNew = [...tableValue];
    const result = tableValueNew.filter((word, i) => i !== index);
    setTableValue(result);
  };
  const SubmitData = (e) => {
    setError(true);
    e.preventDefault();
    if (
      formvalue.name !== "" &&
      formvalue.username !== "" &&
      formvalue.email !== "" &&
      formvalue.password !== "" &&
      formvalue.confirmpassword !== "" &&
      // strongRegex.test(formvalue.password) &&
      usernameregex.test(formvalue.username) &&
      emailregex.test(formvalue.email) &&
      formvalue.password === formvalue.confirmpassword
    ) {
      tableValue.push(formvalue);
      setTableValue(tableValue);
      setFormvalue({
        name: "",
        username: "",
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
                    placeholder="Fisrt Name"
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
                    placeholder="User Name"
                    value={formvalue.username}
                    onChange={(e) =>
                      setFormvalue({ ...formvalue, username: e.target.value })
                    }
                  />
                  <p className="text-danger mb-0 fw-bold">
                    {error && formvalue.username === "" ? (
                      "Last Name is Required"
                    ) : error &&
                      usernameregex.test(formvalue.username) === false ? (
                      <p className="text-danger fw-bold">Invalid username</p>
                    ) : (
                      formvalue.username !== "" && (
                        <p className="text-success fw-bold">Valid</p>
                      )
                    )}
                    {console.log("sdfgh", usernameregex.test)}{" "}
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
                  ) : error && emailregex.test(formvalue.email) === false ? (
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
                    {/* // ) : error && // strongRegex.test(formvalue.password) ===
                    false ? ( //{" "}
                    <p className="text-danger fw-bold">Invalid Password</p>
                    // ) : error && formvalue.password !== "" ? ( //{" "}
                    <p>valid</p>
                    // ) : ( // "" */}
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

          {tableValue.length > 0 ? (
            <Table className="mt-5" striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>ConfirmPassword</th>
                </tr>
              </thead>
              {tableValue && tableValue.length > 0
                ? tableValue.map((val, index) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td>{val.name}</td>
                          <td>{val.username}</td>
                          <td>{val.email}</td>
                          <td>{val.password}</td>
                          <td>{val.confirmpassword}</td>
                        </tr>
                        <button
                          className="common_btn mt-3"
                          type="button"
                          onClick={() => deleteHandler(index)}
                        >
                          Delete
                        </button>
                      </tbody>
                    );
                  })
                : ""}
            </Table>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

export default FormTwo;
