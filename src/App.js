import React, { useContext } from 'react';
import './App.css';
import JobList from './components/JobList';
import { JobContext } from './context/JobContext';
import Filter from './components/Filter/Filter';

const App = () => {
  const { jobs, filters } = useContext(JobContext);

  return (
    <div className="wrapper">
      <div className={`header ${filters.length === 0 ? 'mb-2' : undefined}`} />
      {filters.length > 0 && <Filter />}
      <JobList jobs={jobs} />
    </div>
  );
};

export default App;
