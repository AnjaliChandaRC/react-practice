import { Button } from "bootstrap";
import React from "react";
import CounterPlusMinus from "../components/CounterPlusMinus";
import ButtonClick from "../components/ButtonClick";
import DatePicker from "../components/DatePicker";
import FormInput from "../components/FormInput";
import FormTwo from "../components/FormTwo";

const Main = () => {
  return (
    <>
      <CounterPlusMinus />
      <DatePicker />
      <ButtonClick />
      <FormInput />
      <FormTwo />
    </>
  );
};

export default Main;
