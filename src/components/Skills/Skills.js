import React, { useContext } from 'react';
import './Skills.css';
import { JobContext } from '../../context/JobContext';
import Skill from './Skill';

const Skills = ({ skills }) => {
  const { setFilters } = useContext(JobContext);

  const addFilter = (skill) => {
    setFilters((prev) => {
      if (!prev.includes(skill)) {
        return [...prev, skill];
      }

      return prev;
    });
  };

  return (
    <div className="skills">
      {skills.map((skill, index) => {
        return (
          <Skill
            className={'pointer border-right-radius mr-1'}
            key={index}
            onClick={() => addFilter(skill)}
          >
            {skill}
          </Skill>
        );
      })}
    </div>
  );
};

export default Skills;
