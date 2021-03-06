import React, { useEffect, useState } from 'react';
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

  useEffect (() =>{
    console.log('tema telah diubah')
  },[valueTheme]
  )

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
          Change Theme
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
      <h1 style={{color:"#00fa9a", whiteSpace:"pre-line", textAlign:"center"}}>Kuliner Nusantara {"\n"} Menampilkan Kuliner Dari Penjuru Indonesia</h1>
      <button className="Button" onClick={() => setShow(!show)}>
        {show ? "Hide List" : "Show List"}
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

function Text() {
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