import { useState } from 'react';
import { Button } from 'reactstrap';
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
        <Button className="mx-2" color="primary" onClick={prevImg}>
          Left
        </Button>
        <img src={images[idx]} alt="Gallery Img" />
        {/* <p>{idx}</p> */}
        <Button className="mx-2" color="primary" onClick={nextImg}>
          Right
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
