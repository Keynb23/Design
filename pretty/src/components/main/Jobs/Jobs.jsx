import React from 'react';
import './Jobs.css';

export const Jobs = () => {
  return (
    <section className="jobs-section">
      <h3 className="jobs-title">Jobs For You</h3>
      <ul className="jobs-list">
        <li className="jobs-item">
          <span className="job-role">Frontend Developer</span>
          <span className="job-company">IndieGames</span>
          <span className="job-time">Posted 2h ago</span>
        </li>
        <li className="jobs-item">
          <span className="job-role">UI/UX Designer</span>
          <span className="job-company">Creative Studio</span>
          <span className="job-time">Posted 5h ago</span>
        </li>
        <li className="jobs-item">
          <span className="job-role">Game Producer</span>
          <span className="job-company">PixelWorks</span>
          <span className="job-time">Posted 1d ago</span>
        </li>
      </ul>
    </section>
  );
};