import SingleColorPicker from './SingleColorPicker';
const RGBColorPicker = () => {
  const rValue = 255,
    gValue = 150,
    bValue = 0;
  return (
    <div className="box">
      <h2>RGBColorPicker</h2>
      <div>
        <SingleColorPicker
          color="r"
          value={rValue}
          onChange={() => {
            /* ... */
          }}
        />

        <SingleColorPicker
          color="g"
          value={gValue}
          onChange={() => {
            /* ... */
          }}
        />

        <SingleColorPicker
          color="b"
          value={bValue}
          onChange={() => {
            /* ... */
          }}
        />
      </div>
    </div>
  );
};

export default RGBColorPicker;
