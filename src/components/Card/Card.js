import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdAddCircleOutline } from 'react-icons/md';
import { GrSubtractCircle } from 'react-icons/gr';
import './Card.scss';

const Card = ({ card, index, handleClick }) => {
  return (
    <div className="card">
      <div>{card}</div>
      <button
        className=" card__btn card__btn--add"
        onClick={() => handleClick('add', index)}
      >
        <MdAddCircleOutline />
      </button>
      <button
        className=" card__btn card__btn--subtract"
        onClick={() => handleClick('subtract', index)}
        disabled={!card}
      >
        <GrSubtractCircle />
      </button>
      <button
        className="card__btn card__btn--delete"
        onClick={() => handleClick('delete', index)}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};
export default Card;
