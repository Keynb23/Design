import React from 'react';
import './Network.css';

export const Network = () => {
  return (
    <section className="network-section">
      <h3 className="network-title">Your Network</h3>
      <ul className="network-list">
        <li className="network-item">
          <span className="network-name">Jane Doe</span>
          <span className="network-role">Game Developer</span>
          <button className="Network-Btn">Accept</button>
        </li>
        <li className="network-item">
          <span className="network-name">John Smith</span>
          <span className="network-role">UI Designer</span>
          <button className="Network-Btn">Accept</button>

        </li>
        <li className="network-item">
          <span className="network-name">Alex Lee</span>
          <span className="network-role">Producer</span>
          <button className="Network-Btn">Accept</button>

        </li>
      </ul>
    </section>
  );
};