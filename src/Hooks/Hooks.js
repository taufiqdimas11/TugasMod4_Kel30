import React, {useState, useEffect} from 'react';
import { useContext,createContext } from "react";
import "./Hooks.css";

const themes = {
    light: {
        background: "#ffffcc",
      },
      dark: {
        background: "#001133",
      },
    };

    const ThemeContext = createContext();

function App(props){
  const [valueTheme, setValueTheme] = useState(themes.dark);
    return(
        <ThemeContext.Provider value = {valueTheme}>
                <div
                className="contentWrapper"
                style = {{backgroundColor: valueTheme.background}}
                >
                    <Content tema = {valueTheme} />                                      
                <button
            className = "Button" 
            onClick={()=>
                setValueTheme(
                    valueTheme === themes.light ? themes.dark : themes.light
                )
            }
            >
                change
                </button>           
        </div>  
        </ThemeContext.Provider>        
    );
}

function Content(props) {
    const [jenis, setJenis] = useState('');
    const [warna, setWarna] = useState('');
    const [imageSrc, setImage] = useState('');  

    useEffect(
        () => {
        console.log("jenis kendaraan telah diubah");
      },[jenis]
      );
  
      useEffect(
        () => {
        console.log("warna telah diubah");
      },[warna]
      );

      useEffect(
        () => {
        console.log("gambar telah diubah");
      },[imageSrc]
      );
    
    function handleJenisChange(e){
        setJenis(e.target.value);
    }

    function handleWarnaChange(e){
        setWarna(e.target.value);
    }

    function handleImgChange(e){
        setImage(e.target.value);
    }
  return (
      <div className = "card">
            <div>
            <input type = "text"
                placeholder = "jenis kendaraan"
                size = "20"
                value = {jenis}
                onChange = {handleJenisChange}/>
                </div>

            <div>
            <input type = "text"
                placeholder = "warna"
                size = "20"
                value = {warna}
                onChange = {handleWarnaChange}/>
            </div>
            
            <div>
            <input type = "text"
                placeholder = "url gambar"
                size = "20"
                value = {imageSrc}
                onChange = {handleImgChange}/>
            </div>         

            <h3> {"jenis : " + jenis} </h3>

            <h3> {"warna : " + warna} </h3>

            <img src = {imageSrc}
                alt = "masukkan url gambar" width = "200" height = "200"/>
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