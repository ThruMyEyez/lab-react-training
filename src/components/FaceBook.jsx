import profiles from '../data/berlin.json';

const FaceBook = () => {
  const listProfiles = profiles.map((profile, idx) => {
    const { img, firstName, lastName, country, isStudent } = profile;

    return (
      <div key={idx} className="IdCard box">
        <img src={img} alt="ID-Card Picture" style={{ width: '7rem' }} />
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
            <b>country: </b>
            {country}
          </p>
          <p>
            <b>country: </b>
            {isStudent ? 'Student' : 'Teacher'}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="box">
      <h2>FaceBook</h2>
      {listProfiles}
    </div>
  );
};

export default FaceBook;
