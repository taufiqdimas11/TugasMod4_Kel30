import React, { useState } from 'react';
import { useContext, createContext } from "react";
import "./Hooks.css";
import APICall from './APICall';

const themes = {
  light: {
    background: "#ffffcc",
  },
  dark: {
    background: "#001133",
  },
};

const ThemeContext = createContext();

function App(props) {
  const [valueTheme, setValueTheme] = useState(themes.dark);
  return (

    <ThemeContext.Provider value={valueTheme}>
      <div
        className="contentWrapper"
        style={{ backgroundColor: valueTheme.background }}
      >
        <Content tema={valueTheme} />
        <div className='container'>
        <button
          className="Button"
          onClick={() =>
            setValueTheme(
              valueTheme === themes.light ? themes.dark : themes.light
            )
          }
        >
          change
        </button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

function Content(props) {

  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <h1 style={{color:"#f8570c"}}>Selamat Datang!</h1>
      <button className="Button" onClick={() => setShow(!show)}>
        {show ? "hide" : "show"}
      </button>
      {show && (
        <>
          <div className='hooks-container'>
            <APICall />
          </div>
        </>

      )}

      <div style={{ marginBlock: 30 }} />

      <div>
        <Text tema={props.tema} />
      </div>
    </div>
  );
}

function Text(props) {
  const theme = useContext(ThemeContext);
  return (
    <p
      className="titleContext"
      style={{ color: theme.text }}
    >
      {theme.text}
    </p>
  );
}

export default App;