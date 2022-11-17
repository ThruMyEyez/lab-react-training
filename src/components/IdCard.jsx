import './IdCard.scss';

function IdCard(props) {
  const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
    birthFormated = props.birth.toLocaleDateString('de-DE', options);

  return (
    <div className="IdCard box">
      <img src={props.picture} alt="ID-Card Picture" />
      <div className="IdData">
        <p>
          <b>First name: </b>
          {props.firstName}
        </p>
        <p>
          <b>Last name: </b>
          {props.lastName}
        </p>
        <p>
          <b>Gender: </b>
          {props.gender}
        </p>
        <p>
          <b>Height: </b>
          {props.height}
        </p>
        <p>
          <b>Birth: </b>
          {birthFormated}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
