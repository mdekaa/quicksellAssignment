import React from 'react';
import './KanbanCard.css';
import noPriorityIcon from '../assets/nopriority.svg';
import urgentIcon from '../assets/urgent.svg';
import highIcon from '../assets/high.svg';
import mediumIcon from '../assets/medium.svg';
import lowIcon from '../assets/low.svg';

import todoIcon from '../assets/todo.svg';
import inProgressIcon from '../assets/inprogress.svg';
import doneIcon from '../assets/donejob.svg';
import backlogIcon from '../assets/backlogtask.svg';
import tagIcon from '../assets/sort.svg';
import cancelIcon from '../assets/Cancelledtask.svg';
import userAvatar from '../assets/magnus.jpg';

const priorityIcons = {
  0: noPriorityIcon,
  4: urgentIcon,
  3: highIcon,
  2: mediumIcon,
  1: lowIcon
};

const statusIcons = {
    'Todo': todoIcon,
    'In progress': inProgressIcon,
    
    'Backlog': backlogIcon,
    'Done': doneIcon,
    'Cancel': cancelIcon,
  };

const KanbanCard = ({ ticket }) => {
  const statusIcon = statusIcons[ticket.status] || null;
  const priorityIcon = priorityIcons[ticket.priority] || null;

  return (
    <div className="kanban-card">
      <div className="kanban-card-header">
        <div className='idRow'>
          <p className="ticketid">{ticket.id}</p>
          <div className="avatar-container">
            <img className='avatar' src={userAvatar} alt="" />
            <div className='online'></div>
          </div>

        </div>
        
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
          <img src={priorityIcon} alt="manual" className="manual-icon" />
          <p className="tag">{ticket.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
