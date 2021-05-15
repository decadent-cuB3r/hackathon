import "./App.css";
import { CaGJUProvider } from "./context";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <CaGJUProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component />
          <Route />
        </Switch>
      </BrowserRouter>
    </CaGJUProvider>
  );
}

export default App;
