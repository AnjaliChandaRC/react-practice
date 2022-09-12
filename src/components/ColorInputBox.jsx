import React from "react";
import { useState } from "react";

const ColorInputBox = () => {
  const [changeColor, setChangeColor] = useState();
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-8 m-auto">
              <h3 className="fs-1 fw-bold text-success text-center">
                Change Color Box
              </h3>
              <div
                className="box_bg mt-4 p-0 chng_clr_box"
                style={{ backgroundColor: `${changeColor}` }}
              ></div>
              <div className="text-center mt-4">
                <input
                  className="border_clr"
                  placeholder="Color Name"
                  onChange={(e) => setChangeColor(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ColorInputBox;
