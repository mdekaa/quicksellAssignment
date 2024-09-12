import React from 'react';
import './KanbanCard.css';


import todoIcon from '../assets/to-do.svg';
import inProgressIcon from '../assets/in-progress.svg';
import doneIcon from '../assets/done.svg';
import backlogIcon from '../assets/backlog.svg';
import tagIcon from '../assets/sort.svg';

const statusIcons = {
  'Todo': todoIcon,
  'In progress': inProgressIcon,
  'Done': doneIcon,
  'Backlog': backlogIcon,
};

const KanbanCard = ({ ticket }) => {
  const statusIcon = statusIcons[ticket.status] || null;

  return (
    <div className="kanban-card">
      <div className="kanban-card-header">
        <p className="ticketid">{ticket.id}</p>
        <div className="title-row">
          {statusIcon && (
            <div className="status-icon">
              <img src={statusIcon} alt={ticket.status} />
            </div>
          )}
          <div className="title">{ticket.title}</div>
        </div>
      </div>
      <div className="kanban-card-footer">
        <div className="tag-container">
          <img src={tagIcon} alt="manual" className="manual-icon" />
          <p className="tag">{ticket.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
