import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const incLikes = () => setLikes(likes + 1);

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
    getBgColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="box">
      <h3>Like Btn</h3>
      <button
        style={{
          //react inline css - just for practice
          backgroundColor: getBgColor(),
          color: 'white',
          padding: '0.4rem 1rem',
          fontWeight: 'bold',
          borderRadius: '4px',
        }}
        onClick={incLikes}
      >
        {likes !== 1 ? `${likes} Likes` : `1 Like`}
      </button>
    </div>
  );
};

export default LikeButton;
