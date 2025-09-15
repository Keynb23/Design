import React from 'react';
import './Groups.css';

export const Groups = () => {
  return (
    <section className="groups-section">
      <h3 className="groups-title">Your Groups</h3>
      <ul className="groups-list">
        <li className="groups-item">
          <span className="group-name">Indie Game Devs</span>
          <span className="group-members">1,200 members</span>
        </li>
        <li className="groups-item">
          <span className="group-name">UI/UX Designers</span>
          <span className="group-members">850 members</span>
        </li>
        <li className="groups-item">
          <span className="group-name">Producers Network</span>
          <span className="group-members">500 members</span>
        </li>
      </ul>
    </section>
  );
};