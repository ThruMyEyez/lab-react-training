import profiles from '../data/berlin.json';
import { useState } from 'react';

const FaceBook = () => {
  const countries = new Set(['All']);

  const [activeNation, setActiveNation] = useState('');
  //* left for bonus
  const [activeIdx, setActiveIdx] = useState(false);

  const listProfiles = profiles.map((profile, idx) => {
    const { img, firstName, lastName, country, isStudent } = profile;
    //setNations(nations.add(country));
    countries.add(country);

    return (
      <div
        key={idx}
        style={{
          backgroundColor:
            activeNation === 'All'
              ? 'cadetblue'
              : country === activeNation
              ? 'cadetblue'
              : 'white',
        }}
        className="IdCard box"
      >
        <img
          src={img}
          onClick={() => {
            setActiveIdx(idx);
            console.log(activeIdx);
          }}
          alt="ID-Card Picture"
          style={{ width: '7rem' }}
        />

        <div
          className="IdData"
          style={{ display: activeIdx === idx ? 'block' : 'none' }}
        >
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
            <b>Type: </b>
            {isStudent ? 'Student' : 'Teacher'}
          </p>
        </div>
      </div>
    );
  });

  const activateCountry = (data) => {
    console.log('Country btn clicked.', data);

    setActiveNation(data === activeNation ? '' : data);
    console.log('ActiveNation: ', activeNation);
  };

  const listCountryBtns = [...countries].map((country, idx) => {
    return (
      <button
        key={idx}
        onClick={() => activateCountry(country)}
        style={{
          marginRight: '0.5rem',
          marginTop: '0.5rem',
          backgroundColor: country === activeNation ? 'cadetblue' : 'white',
        }}
      >
        {country}
      </button>
    );
  });

  return (
    <div className="box">
      <h2>FaceBook</h2>
      {listCountryBtns}
      {listProfiles}
    </div>
  );
};

export default FaceBook;
