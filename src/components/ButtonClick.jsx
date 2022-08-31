import React, { useState } from "react";

const BtnAndInput = () => {
  const [value, setValue] = useState();
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1 className="fs-1 fw-bold text-success">
                Change Value On Button Click
              </h1>
              <p
                className={`${
                  value
                    ? "text-danger fw-bold fs-4"
                    : "text-success fw-bold fs-4"
                } mt-3 mt-sm-5`}
              >
                {`${value ? "Anjali" : "Chanda"}`}
              </p>
              <div>
                <button className="common_btn" onClick={() => setValue(!value)}>
                  Click Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BtnAndInput;
