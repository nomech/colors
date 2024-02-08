import PropTypes from "prop-types";
import chroma from "chroma-js";

function ColorButton({
  setHexColor,
  setRgbColor,
  setBtnColor,
  setTxtColor,
}) {
  const generateColor = () => {
    const color = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

    let r = parseInt(color.toString().slice(0, 2), 16);
    let g = parseInt(color.toString().slice(2, 4), 16);
    let b = parseInt(color.toString().slice(4, 6), 16);

    setHexColor("#" + color);
    setRgbColor(r + "," + g + "," + b);
    setBtnColor(
      chroma("#" + color)
        .darken()
        .hex()
    );
    setTxtColor(
      chroma("#" + color)
        .brighten()
        .hex()
    );

  };

  return (
    <div className="color-button">
      <button onClick={() => generateColor()}> Paint the world!</button>
    </div>
  );
}

ColorButton.propTypes = {
  setHexColor: PropTypes.func,
  setRgbColor: PropTypes.func,
  setBtnColor: PropTypes.func,
  setTxtColor: PropTypes.func,
  setColorName: PropTypes.func,
};

export default ColorButton;
