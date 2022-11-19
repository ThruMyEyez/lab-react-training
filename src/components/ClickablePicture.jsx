import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [pictureState, setPictureState] = useState(false),
    toggle = () => setPictureState(!pictureState),
    picture = pictureState ? imgClicked : img;
  return (
    <div className="ClickablePicture box">
      <h2>Clickable Picture</h2>
      <img
        onClick={toggle}
        src={('../../public/', picture)}
        style={{ height: '10rem', borderRadius: '8px' }}
      />
    </div>
  );
};

export default ClickablePicture;
