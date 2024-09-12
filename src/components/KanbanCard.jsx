import React from 'react';
import './KanbanCard.css'

const KanbanCard = ({ ticket }) => {
  return (
    <div className="kanban-card">
      <h4>{ticket.id}</h4>
      <h4>{ticket.title}</h4>
      <p>Tag: {ticket.tag.join(', ')}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default KanbanCard;
