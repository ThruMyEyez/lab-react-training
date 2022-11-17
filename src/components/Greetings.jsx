function Greetings(props) {
  const currentLang = {
    de: 'Hallo',
    fr: 'Bonjour',
  };

  return (
    <div className="box">{`${currentLang[props.lang]} ${props.children}`}</div>
  );
}

export default Greetings;
