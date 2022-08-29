import React, { useState } from "react";

const CounterPlusMinus = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column vh-100">
        <h1 className="common_btn bg-transparent fs-4">{count}</h1>
        <div className="mt-4">
          <button
            className="common_btn py-2 px-4"
            onClick={() => setCount(count + 1)}
          >
            Add
          </button>
          <button
            className="common_btn py-2 px-4 ms-3"
            onClick={() => setCount(count - 1)}
          >
            Minus
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterPlusMinus;
