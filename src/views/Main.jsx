import React from "react";
import BtnAndInput from "../components/BtnAndInput";
import CounterPlusMinus from "../components/CounterPlusMinus";
import DatePicker from "../components/DatePicker";

const Main = () => {
  return (
    <>
      <CounterPlusMinus />
      <DatePicker />
      <BtnAndInput />
    </>
  );
};

export default Main;
