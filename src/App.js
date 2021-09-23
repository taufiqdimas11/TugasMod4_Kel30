import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Hooks from "./Hooks/Hooks";


export default function App() {
  return (
    <BrowserRouter>
      <>
        <header>
          <div className="title">
            <p>Tugas Modul 5 Kelompok 30</p>
          </div>
        </header>
        
        <Hooks />
      </>
    </BrowserRouter>
  );
}
