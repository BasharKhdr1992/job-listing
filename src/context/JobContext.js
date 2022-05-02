import React, { createContext, useState } from 'react';
import data from '../data/data.json';

export const JobContext = createContext();

export const JobProvider = (props) => {
  const [jobs, setJobs] = useState(data);
  const [filters, setFilters] = useState([]);

  const applyFilters = (jobs, filters, index) => {
    if (index < filters.length) {
      const newIndex = index + 1;

      return applyFilters(
        jobs.filter(
          (job) =>
            job.languages.includes(filters[index]) ||
            job.tools.includes(filters[index]) ||
            job.role === filters[index] ||
            job.level === filters[index]
        ),
        filters,
        newIndex
      );
    } else {
      return jobs;
    }
  };

  const filteredJobs = applyFilters(jobs, filters, 0);

  return (
    <JobContext.Provider
      value={{ jobs: filteredJobs, filters, setFilters, setJobs }}
    >
      {props.children}
    </JobContext.Provider>
  );
};
