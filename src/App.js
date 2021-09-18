import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Usestate from "./Hooks/Hooks";


export default function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="title">
          <p>Tugas Modul 4 Kelompok 30</p>
        </div>
      </header>
      <Switch>
        <Route path="/" exact component={Usestate} />

      </Switch>
    </BrowserRouter>
  );
}
