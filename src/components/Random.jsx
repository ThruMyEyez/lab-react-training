const Random = ({ min, max }) => {
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div className="box">
      {`Random value between ${min} and ${max} => ${randomNum}`}
    </div>
  );
};

export default Random;
