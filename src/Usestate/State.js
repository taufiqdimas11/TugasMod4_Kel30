import { useContext, createContext, useState } from "react";
import "./State.css";

// const themes = {
//   light: {
//     text: "rgb(97, 218, 251)",
//     background: "#DEE4E7",
//   },
//   dark: {
//     text: "#DEE4E7",
//     background: "rgb(40, 44, 52)",
//   },
// };

export default function Index() {
  const contoh = useState(false);
  console.log("[state]", contoh);

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  //const [count, setCount] = useState(0);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  //const [valueTheme, setValueTheme] = useState(themes.dark);

  //const countUp = () => setCount(count + 1);
  //const countDown = () => setCount(count - 1);

  return (
    <div className="container">
      <div style={{ marginBlock: 30 }} />
      {show && (
        <>
          <div className="titleWrapper">
            <p className="title">input with useState</p>
          </div>
          <div className="inputWrapper">
            <div>
              <input
                placeholder="name"
                size="50"
                value={user}
                onChange={(event) => setUser(event.target.value)}
              />
            </div>
            <div>
              <input
                placeholder="password"
                size="50"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
        </>
        
      )}
      <button className="Button" onClick={() => setShow(!show)}>
        {show ? "hide" : "show"}
      </button>

      <div style={{ marginBlock: 30 }} />

      {show1 && (
        <>
          <div className="titleWrapper">
            <p className="title">input with useState</p>
          </div>
          <div className="inputWrapper">
            <div>
              <input
                placeholder="name"
                size="50"
                value={user}
                onChange={(event) => setUser(event.target.value)}
              />
            </div>
            <div>
              <input
                placeholder="password"
                size="50"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
        </>
        
      )}
      <button className="Button" onClick={() => setShow1(!show1)}>
        {show1 ? "hide" : "show"}
      </button>
      {/* <div style={{ marginBlock: 30 }} />
      <p className="title">Counter with useState</p>
      <p className="countValue">{count}</p>
      <div className="btnWrapper">
        <button className="Button" onClick={countUp}>
          Up
        </button>
        <button className="Button" onClick={countDown}>
          Down
        </button>
      </div> */}

      <div style={{ marginBlock: 30 }} />
    </div>
  );
}