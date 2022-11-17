function BoxColor(props) {
  const { r, g, b } = props;
  const toHex = (num) => num.toString(16);

  return (
    <div
      className="BoxColor box"
      style={{ backgroundColor: `rgb(${r},${g},${b})`, color: 'white' }}
    >
      <p style={{ margin: 0 }}>{`rgb(${r},${g},${b})`}</p>
      <p style={{ margin: 0 }}>{`#${toHex(r)}${toHex(g)}${toHex(b)}`}</p>
    </div>
  );
}

export default BoxColor;
