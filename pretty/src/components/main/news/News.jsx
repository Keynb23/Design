import React from 'react';
import './News.css';

export const News = () => {
  return (
    <section className="news-section">
      <h3 className="news-title">Trending News</h3>
      <ul className="news-list">
        <li className="news-item">
          <span className="news-headline">Tech jobs are booming in 2025</span>
          <span className="news-time">1h ago</span>
        </li>
        <li className="news-item">
          <span className="news-headline">Remote work continues to rise</span>
          <span className="news-time">3h ago</span>
        </li>
        <li className="news-item">
          <span className="news-headline">AI skills in high demand</span>
          <span className="news-time">5h ago</span>
        </li>
      </ul>
    </section>
  );
};