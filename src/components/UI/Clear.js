import React from 'react';

const Clear = ({ children, onClick }) => {
  return (
    <button className="btn-link" onClick={onClick}>
      {children}
    </button>
  );
};

export default Clear;
