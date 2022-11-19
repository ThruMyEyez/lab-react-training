const NumbersTable = ({ limit }) => {
  const liArray = [];
  for (let i = 1; i <= limit; i++) {
    const checkOddEven =
      i % 2 !== 0 ? (
        <li key={i}>{i}</li>
      ) : (
        <li key={i} style={{ backgroundColor: 'red' }}>
          {i}
        </li>
      );
    liArray.push(checkOddEven);
  }

  return (
    <div className="box">
      <h2>NumbersTable</h2>
      <ul className="NumbersTable">{liArray}</ul>
    </div>
  );
};

export default NumbersTable;
