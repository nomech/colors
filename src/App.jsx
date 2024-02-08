import { useState, useEffect } from "react";
import ColorButton from "./comps/ColorButton";
import "./App.css";
import chroma from "chroma-js";

function App() {
const [hexColor, setHexColor] = useState("#fff");
const [rgbColor, setRgbColor] = useState("#fff");
const [btnColor, setBtnColor] = useState("#aaaaaa");
const [txtColor, setTxtColor] = useState("#fff");

useEffect(() => {
  let docStyle = document.documentElement.style;
  docStyle.setProperty("--bg-color", hexColor);
  docStyle.setProperty("--btn-color", btnColor);
  docStyle.setProperty("--text-color", txtColor);
  docStyle.setProperty("--color-1", chroma(hexColor).brighten().brighten().hex());
  docStyle.setProperty("--color-2", chroma(hexColor).brighten().hex());
  docStyle.setProperty("--color-3", chroma(hexColor).darken().hex());
  docStyle.setProperty("--color-4", chroma(hexColor).darken().darken().hex());
}, [hexColor, btnColor, txtColor]);

return (
  <div className="color-container">
    <div className="color-name-container">
      <h1>You created a color!</h1>
      <h1>HEX: {hexColor}</h1>
      <h1> RGB: {rgbColor}</h1>

      <ColorButton
        setHexColor={setHexColor}
        setRgbColor={setRgbColor}
        setBtnColor={setBtnColor}
        setTxtColor={setTxtColor}
      />
    </div>

    <div className="colorBox" id="color1"></div>
    <div className="colorBox" id="color2"></div>
    <div className="colorBox" id="color3"></div>
    <div className="colorBox" id="color4"></div>
  
  </div>
);
}

export default App;
