import React, { useContext } from 'react';
import { JobContext } from '../../context/JobContext';
import Skill from '../Skills/Skill';
import Clear from '../UI/Clear';
import './Filter.css';
import Close from './../UI/Close';

const Filter = () => {
  const { filters, setFilters } = useContext(JobContext);

  const clearFilters = () => {
    setFilters([]);
  };

  const removeFilter = (filter) => {
    setFilters((prev) => prev.filter((item) => item !== filter));
  };

  return (
    <div className="filter">
      <div className="filters-list">
        {filters.map((filter, index) => {
          return (
            <div className="btn-filter">
              <Skill key={index} className={'ml-1'}>
                {filter}
              </Skill>
              <Close onClick={() => removeFilter(filter)} />
            </div>
          );
        })}
      </div>
      <Clear onClick={clearFilters}>clear</Clear>
    </div>
  );
};

export default Filter;
