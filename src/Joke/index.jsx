import React, { useState } from 'react';
import './style.css';

const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [numberLikes, setNumberLikes] = useState(likes);
  const [numberDislikes, setNumberDislikes] = useState(dislikes);

  const likesUp = () => {
    setNumberLikes(numberLikes + 1);
  };

  const dislikesUp = () => {
    setNumberDislikes(numberDislikes + 1);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>
        <p className="joke__text">{text}</p>
      </div>

      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={likesUp}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {numberLikes}
        </span>

        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={dislikesUp}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {numberDislikes}
        </span>
      </div>
    </div>
  );
};

export default Joke;
