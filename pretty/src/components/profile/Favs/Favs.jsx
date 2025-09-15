import React from 'react';
import './Favs.css';

const Favs = () => {
    return (
        <div className="favs-container">
            <div className="favs-content">
                <div className="favs-header">
                    <h2>Favorites</h2>
                </div>
                <ul className="favs-list">
                    <li className="favs-item">
                        <span>⭐</span>
                        <span>Blender tutorials</span>
                    </li>
                    <li className="favs-item">
                        <span>⭐</span>
                        <span>React tips</span>
                    </li>
                    <li className="favs-item">
                        <span>⭐</span>
                        <span>Quotes</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Favs;