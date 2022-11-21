import './DriverCard.scss';
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  console.log(name, rating, car);
  return (
    <div className="DriverCard box">
      <img src={img} alt={name} />
      <div>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};
export default DriverCard;
