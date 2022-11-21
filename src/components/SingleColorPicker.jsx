import { useState } from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  //const [redState, setRedState] = useState(value);
  //const [greenState, setGreenState] = useState(value);
  //const [blueState, setBlueState] = useState(value);
  //const toHex = (num) => num.toString(16);

  const [cvalue, setValue] = useState(value);

  const [bgColor, setBgColor] = useState(() => {
    if (color === 'r') {
      return `rgb(${cvalue},0,0)`;
    } else if (color === 'g') {
      return `rgb(0,${cvalue},0)`;
    } else if (color === 'b') {
      return `rgb(0,0,${cvalue})`;
    }
  });

  const handleBgColor = () => {
    if (color === 'r') {
      setBgColor(`rgb(${cvalue},0,0)`);
    } else if (color === 'g') {
      setBgColor(`rgb(0,${cvalue},0)`);
    } else if (color === 'b') {
      setBgColor(`rgb(0,0,${cvalue})`);
    }
  };

  const handleChange = (event_value) => {
    setValue(event_value);
    onChange(event_value);
    handleBgColor();
  };

  return (
    <div
      style={{
        margin: '1rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="colorPreview"
        style={{
          width: '3rem',
          height: '3rem',
          border: '3px solid black',
          backgroundColor: bgColor,
        }}
      ></div>
      <div className="dataPreview" style={{ margin: '0 0 0 0.5rem' }}>
        <b>{color.toUpperCase()}:</b>
        <input
          type="number"
          onChange={(e) => handleChange(e.target.value)}
          value={cvalue}
          min={0}
          max={255}
        />
      </div>
    </div>
  );
};
export default SingleColorPicker;
{
  /* `#${parseInt(redState, 10).toString(16)}0000` 😂 */
}
