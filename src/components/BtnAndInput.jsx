import React, { useState } from "react";

const BtnAndInput = () => {
  const [value, setValue] = useState();
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-6 text-center">
              <p
                className={`${
                  value ? "text-info fw-bold fs-4" : "text-danger fw-bold fs-4"
                }`}
              >
                {`${value ? "Anjali" : "Chanda"}`}
              </p>
              <div>
                <button
                  className="common_btn px-3 py-2"
                  onClick={() => setValue(!value)}
                >
                  Click Me
                </button>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BtnAndInput;
