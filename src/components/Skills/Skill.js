import React from 'react';
import './Skill.css';

const Skill = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`skill ${className}`}>
      {children}
    </button>
  );
};

export default Skill;
