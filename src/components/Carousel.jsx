import { useState } from 'react';

const Carousel = ({ images }) => {
  const [idx, setIdx] = useState(0);

  const nextImg = () => {
    setIdx((prevImage) =>
      prevImage < images.length - 1 ? prevImage + 1 : prevImage
    );
  };

  const prevImg = () =>
    setIdx((prevImage) => (prevImage === 0 ? 0 : prevImage - 1));

  return (
    <div className="box">
      <h2>Carousel</h2>
      <div className="Carousel">
        <button onClick={prevImg}>Left</button>
        <img src={images[idx]} alt="Gallery Img" />
        {/* <p>{idx}</p> */}
        <button onClick={nextImg}>Right</button>
      </div>
    </div>
  );
};

export default Carousel;
