import React, { useState } from 'react';
import KanbanCard from './KanbanCard';
import sortIcon from '../assets/sort.svg';
import './KanbanColumn.css'; 

const KanbanColumn = ({ group, tickets }) => {
  const [sorting, setSorting] = useState('priority'); 

  const sortByPriority = (tickets) => {
    return [...tickets].sort((a, b) => b.priority - a.priority);
  };

  const sortByTitle = (tickets) => {
    return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
  };


  let sortedTickets = sorting === 'priority' ? sortByPriority(tickets) : sortByTitle(tickets);

  return (
    <div className="kanban-column">
      <div className="kanban-column-header">
        <h3>{group}</h3>
        <div className="three-dot-menu">
          <img src={sortIcon} alt="Sort" />
          <div className="dropdown-content">
            <button onClick={() => setSorting('priority')}>Sort by Priority</button>
            <button onClick={() => setSorting('title')}>Sort by Title</button>
          </div>
        </div>
      </div>
      {sortedTickets.map((ticket) => (
        <KanbanCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default KanbanColumn;
