import React, { useState } from 'react';
import './KanbanHeader.css';
import displayIcon from '../assets/Display.svg';
import downIcon from '../assets/down.svg';

const KanbanHeader = ({ setGrouping, setSorting }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedGrouping, setSelectedGrouping] = useState('status'); 
  const [selectedSorting, setSelectedSorting] = useState('title'); 

  const handleGroupingChange = (e) => {
    const value = e.target.value;
    setSelectedGrouping(value);
    setGrouping(value);
  };

  const handleSortingChange = (e) => {
    const value = e.target.value;
    setSelectedSorting(value);
    setSorting(value); 
  };

  return (
    <header className="kanban-header">
      <nav className="navbar">
        <div className="navbar-controls">
          <div className="dropdown">
            <button
              className="dropdown-button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img className="displayicon" src={displayIcon} alt="Display" /> Display
              <img className="downicon" src={downIcon} alt="down" />
            </button>
            {dropdownOpen && (
              <div className="dropdown-content">
                <div className="dropdown-group">
                  <label>Grouping:</label>
                  <div className="dropdown-options">
                    <select value={selectedGrouping} onChange={handleGroupingChange}>
                      <option value="status">Status</option>
                      <option value="user">User</option>
                      <option value="priority">Priority</option>
                    </select>
                  </div>
                </div>
                <div className="dropdown-group">
                  <label>Order:</label>
                  <div className="dropdown-options">
                    <select  value={selectedSorting} onChange={handleSortingChange}>
                      <option value="title">Title</option>
                      <option value="priority">Priority</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default KanbanHeader;
