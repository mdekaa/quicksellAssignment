import React from 'react';
import './KanbanCard.css'

const KanbanCard = ({ ticket }) => {
  return (
    <div className="kanban-card">
      <p className='ticketid'>{ticket.id}</p>
      <h4 className='title'>{ticket.title}</h4>
      <p className='tag'>Tag: {ticket.tag}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default KanbanCard;
