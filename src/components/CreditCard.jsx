import './CreditCard.scss';
//! import masterCard from '../assets/images/master-card.svg';

import visa from '../assets/images/visa.png';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const logos = {
    'Master Card': 'Master Card',
    Visa: visa,
  };

  expirationMonth =
    expirationMonth < 10 ? '0' + expirationMonth : expirationMonth;

  {
    /*  const hideCardNum = () => {
    const nums = [];
    for (let i = 0; i < number.length; i++) {
      const check = i < number.length - 4 ? nums.push('*') : nums.push(i);
    }
  }; */
  }

  const hideNums = number.split('').map((num, idx) => {
    const result = [];
    idx < number.length - 4
      ? idx % 4 === 0
        ? result.push(' ●')
        : result.push('●')
      : idx % 12 === 0
      ? result.push(` ${num}`)
      : result.push(num);
    return result;
  });

  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="logo">
        <img src={logos[type]} alt={type} />
      </div>
      <p className="creditNum">{hideNums}</p>
      <p className="expire">
        Expires {`${expirationMonth}/${expirationYear.toString().slice(-2)}`}
        <span>{bank}</span>
      </p>
      <div className="owner">{owner}</div>
    </div>
  );
};

export default CreditCard;
