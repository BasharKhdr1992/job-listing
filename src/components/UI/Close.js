import React from 'react';

const Close = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn-close">
      X
    </button>
  );
};

export default Close;
