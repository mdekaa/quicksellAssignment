import React from 'react';
import './KanbanHeader.css';
import displayIcon from "../assets/Display.svg";
import downIcon from "../assets/down.svg"

const KanbanHeader = ({ grouping, setGrouping }) => {
  return (
    <header className="kanban-header">
      <nav className="navbar">
        <div className="navbar-controls">
          <div className="dropdown">
            <button className="dropdown-button"><img className='displayicon' src={displayIcon} alt="display" /> Display <img className='downicon' src={downIcon} alt="down" /></button>
            <div className="dropdown-content">
              <button onClick={() => setGrouping('status')}>Status</button>
              <button onClick={() => setGrouping('user')}>User</button>
              <button onClick={() => setGrouping('priority')}>Priority</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default KanbanHeader;
