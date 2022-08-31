import React, { useState } from "react";

const FormInput = () => {
  const [initialvalue, setInitialvalue] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  // const [lastname, setLastName] = useState();
  // const [password, setPassword] = useState();
  // const [confirmpassword, setConfiempassword] = useState();
  // const [showData, setShowData] = useState([]);

  const Submitbtn = () => {
    console.log(initialvalue);
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
                    type="text"
                    value={initialvalue.email}
                    placeholder="Email"
                  />
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
