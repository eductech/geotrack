import React from 'react';

const Marker = () => {
  return (
    <div className="marker">
      <div className="marker__circle marker__circle_five"></div>
      <div className="marker__circle marker__circle_four"></div>
      <div className="marker__circle marker__circle_three"></div>
      <div className="marker__circle marker__circle_two"></div>
      <div className="marker__circle marker__circle_one"></div>
      <div className="marker__pointer" />
    </div>
  );
}

export default Marker;