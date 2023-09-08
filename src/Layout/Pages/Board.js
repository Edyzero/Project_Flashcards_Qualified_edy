import React from 'react';
import './Board.css'; // Make sure to import your CSS file for board styling

function Board({ title = 'title?', content = '...', subtitle , children }) {
  return (
    <div className="board">
      <div className="board-content">
        <h2 className="board-title">{title}</h2>
        {subtitle && <h3 className="board-subtitle">{subtitle}</h3>}
        <p className="board-text">{content}</p>
        {children}
      </div>
    </div>
  );
}

export default Board;
