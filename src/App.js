import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "../src/views/Main";
// import { Route, Switch } from "react-router";
// import CounterPlusMinus from "./components/CounterPlusMinus";
// import BtnAndInput from "./components/BtnAndInput";
// import ButtonClick from "../src/components/ButtonClick";
// import CounterPlusMinus from "../src/components/CounterPlusMinus";
function App() {
  return (
    <>
      {/* <Switch>
        <Route exact path="/" component={CounterPlusMinus} />
        <Route exact path="/btninput" component={ButtonClick} />
      </Switch> */}
      <Main />
    </>
  );
}

export default App;
