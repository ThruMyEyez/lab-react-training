import './IdCard.scss';

const IdCard = ({ birth, picture, firstName, lastName, gender, height }) => {
  const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
    birthFormated = birth.toLocaleDateString('de-DE', options);

  return (
    <div className="IdCard box">
      <img src={picture} alt="ID-Card Picture" />
      <div className="IdData">
        <p>
          <b>First name: </b>
          {firstName}
        </p>
        <p>
          <b>Last name: </b>
          {lastName}
        </p>
        <p>
          <b>Gender: </b>
          {gender}
        </p>
        <p>
          <b>Height: </b>
          {height}
        </p>
        <p>
          <b>Birth: </b>
          {birthFormated}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
