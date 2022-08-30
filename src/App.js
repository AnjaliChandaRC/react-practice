import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./views/Main";
// import { Route, Routes } from "react-router-dom";
// import CounterPlusMinus from "./components/CounterPlusMinus";
// import BtnAndInput from "./components/BtnAndInput";
function App() {
  return (
    <>
      {/* <Routes>
        <Route exact path="/" component={CounterPlusMinus} />
        <Route exact path="/btninput" component={BtnAndInput} />
      </Routes> */}
      <Main />
    </>
  );
}

export default App;
