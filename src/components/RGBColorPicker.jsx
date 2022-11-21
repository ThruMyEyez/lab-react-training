import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(255);
  const [gValue, setGValue] = useState(150);
  const [bValue, setBValue] = useState(0);

  return (
    <div className="box">
      <h2>RGBColorPicker</h2>
      <div>
        <SingleColorPicker
          color="r"
          value={rValue}
          onChange={(val) => setRValue(val)}
        />
        <SingleColorPicker
          color="g"
          value={gValue}
          onChange={(val) => setGValue(val)}
        />
        <SingleColorPicker
          color="b"
          value={bValue}
          onChange={(val) => {
            setBValue(val);
          }}
        />
        <div
          style={{
            margin: '1rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '3rem',
              height: '3rem',
              border: '3px solid black',
              backgroundColor: `rgb(${rValue} ,${gValue} ,${bValue} )`,
            }}
          ></div>
          <b style={{ margin: '0 0 0 0.5rem' }}>
            rgb({`${rValue}, ${gValue}, ${bValue}`})
          </b>
        </div>
      </div>
    </div>
  );
};

export default RGBColorPicker;
