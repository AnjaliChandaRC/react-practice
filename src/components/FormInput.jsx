import React, { useState } from "react";

const FormInput = () => {
  const [initialvalue, setInitialvalue] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [formerror, setFormerror] = useState(false);
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const Submitbtn = (e) => {
    setFormerror(true);
    e.preventDefault();
    if (
      initialvalue.name !== "" &&
      initialvalue.lastname !== "" &&
      initialvalue.email !== "" &&
      initialvalue.password !== "" &&
      initialvalue.confirmpassword !== "" &&
      regex.test(initialvalue.email)
    ) {
      setFormerror(false);
      setInitialvalue({
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
      console.log(initialvalue, "initialvalue");
    }
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
                    onChange={(e) =>
                      setInitialvalue({ ...initialvalue, name: e.target.value })
                    }
                    className="w-100 input_bg color_pink"
                    type="text"
                    value={initialvalue.name}
                    placeholder="Name"
                  />
                  {formerror && initialvalue.name === "" ? (
                    <p className="text-danger fw-bold">Name is required</p>
                  ) : (
                    initialvalue !== ""
                  )}
                </div>
                <div className="mt-3">
                  <input
                    onChange={(e) =>
                      setInitialvalue({
                        ...initialvalue,
                        lastname: e.target.value,
                      })
                    }
                    className="w-100 input_bg color_pink"
                    type="text"
                    value={initialvalue.lastname}
                    placeholder="Last Name"
                  />
                  {formerror && initialvalue.lastname === "" ? (
                    <p className="text-danger fw-bold">Last Name is required</p>
                  ) : (
                    initialvalue !== ""
                  )}
                </div>
                <div className="mt-3">
                  <input
                    onChange={(e) =>
                      setInitialvalue({
                        ...initialvalue,
                        email: e.target.value,
                      })
                    }
                    className="w-100 input_bg color_pink"
                    type="email"
                    value={initialvalue.email}
                    placeholder="Email"
                  />
                  {formerror && initialvalue.email === "" ? (
                    <p className="text-danger fw-bold">Email is required</p>
                  ) : formerror && regex.test(initialvalue.email) === false ? (
                    <p className="text-danger fw-bold">Email Not Valid</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mt-3">
                  <input
                    onChange={(e) =>
                      setInitialvalue({
                        ...initialvalue,
                        password: e.target.value,
                      })
                    }
                    className="w-100 input_bg color_pink"
                    type="password"
                    placeholder="Password"
                    value={initialvalue.password}
                  />
                  {formerror && initialvalue.password === "" ? (
                    <p className="text-danger fw-bold">Password is required</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mt-3">
                  <input
                    onChange={(e) =>
                      setInitialvalue({
                        ...initialvalue,
                        confirmpassword: e.target.value,
                      })
                    }
                    className="w-100 input_bg color_pink"
                    type="password"
                    value={initialvalue.confirmpassword}
                    placeholder="Confirm Password"
                  />
                  {formerror && initialvalue.confirmpassword === "" ? (
                    <p className="text-danger fw-bold">
                      Confirm Password is required
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="text-center mt-4">
                  <button onClick={(e) => Submitbtn(e)} className="common_btn">
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
