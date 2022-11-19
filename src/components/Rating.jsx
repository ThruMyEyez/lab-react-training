const Rating = (props) => {
  const currentRating = {
      0: '☆☆☆☆☆',
      1: '★☆☆☆☆',
      2: '★★☆☆☆',
      3: '★★★☆☆',
      4: '★★★★☆',
      5: '★★★★★',
    },
    rating = currentRating[Math.round(props.children)];

  return (
    <div>
      {/* ☆ & ★ */}
      <p style={{ fontSize: '2rem' }}> {rating} </p>
    </div>
  );
};

export default Rating;
