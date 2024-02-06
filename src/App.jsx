import { useState, useEffect } from "react";
import ColorButton from "./comps/ColorButton";
import "./App.css";

function App() {
  const [hexColor, setHexColor] = useState("#fff");
  const [rgbColor, setRgbColor] = useState("#fff");
  const [btnColor, setBtnColor] = useState("#fff");
  const [txtColor, setTxtColor] = useState("#fff");

  useEffect(() => {
    let docStyle = document.documentElement.style;
    docStyle.setProperty("--bg-color", hexColor);
    docStyle.setProperty("--btn-color", btnColor);
    docStyle.setProperty("--text-color", txtColor);
  }, [hexColor, btnColor,txtColor]);

  return (
    <>
      <div>
        <div className="color-name-container">
          <h1>You created a color! </h1>
          <h1>HEX: {hexColor}</h1>
          <h1> RGB: {rgbColor}</h1>
        </div>
        <ColorButton
          setHexColor={setHexColor}
          setRgbColor={setRgbColor}
          setBtnColor={setBtnColor}
          setTxtColor={setTxtColor}
        />
      </div>
    </>
  );
}

export default App;
