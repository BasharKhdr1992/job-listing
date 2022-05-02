import React from 'react';
import './JobCard.css';
import Skills from './Skills/Skills';
import New from './UI/New';
import Featured from './UI/Featured';

const JobCard = ({ job }) => {
  const renderFeature = job.featured && <Featured />;
  const renderNew = job.new && <New />;

  return (
    <div className="card">
      <div className="card-left">
        <img src={`${job.logo}`} className="logo" alt={job.company} />
        <div className="card-info">
          <div className="company-wrapper">
            <div className="company">{job.company}</div>
            {renderNew}
            {renderFeature}
          </div>
          <p className="job-position">{job.position}</p>
          <div className="job-desc">
            {[job.postedAt, job.contract, job.location].join(' . ')}
          </div>
        </div>
      </div>
      <Skills skills={[job.role, job.level, ...job.languages, ...job.tools]} />
    </div>
  );
};

export default JobCard;
