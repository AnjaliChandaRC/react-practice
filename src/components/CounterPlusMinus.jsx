import React, { useState } from "react";

const CounterPlusMinus = () => {
  const [count, setCount] = useState(10);

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5">
              <div className="text-center">
                <h2 className="fs-1 fw-bold text-success">Counter</h2>
                <h1 className="fs-2">{count}</h1>
                <div className="mt-2">
                  <button
                    className="common_btn mt-3"
                    onClick={() => setCount(count + 1)}
                  >
                    Add
                  </button>
                  <button
                    className="common_btn mt-3 ms-3"
                    onClick={() => setCount(count - 1)}
                    disable
                  >
                    Minus
                  </button>
                  <button
                    className="common_btn mt-3 ms-3"
                    onClick={() => setCount(count * 2)}
                    disable
                  >
                    Multiply*2
                  </button>
                  <button
                    className="common_btn mt-3 ms-3"
                    onClick={() => setCount(count / 2)}
                    disable
                  >
                    Divide*2
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

export default CounterPlusMinus;
