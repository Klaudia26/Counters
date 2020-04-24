import React from 'react';
import Card from '../Card/Card';
import './Counters.scss';

const Counters = ({ cards, handleClick }) => {
  return (
    <div className="counters">
      {cards.map((card, index) => {
        return <Card card={card} index={index} handleClick={handleClick} />;
      })}
    </div>
  );
};
export default Counters;
