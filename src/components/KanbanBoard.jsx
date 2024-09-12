import React from 'react';
import KanbanColumn from './KanbanColumn';
import './KanbanBoard.css';

const KanbanBoard = ({ tickets, users, grouping, sorting }) => {

  const groupByStatus = (tickets) => {
    return tickets.reduce((acc, ticket) => {
      if (!acc[ticket.status]) acc[ticket.status] = [];
      acc[ticket.status].push(ticket);
      return acc;
    }, {});
  };

  const groupByUser = (tickets) => {
    return tickets.reduce((acc, ticket) => {
      const user = users.find((user) => user.id === ticket.userId);
      const userName = user ? user.name : 'Unknown User';
      if (!acc[userName]) acc[userName] = [];
      acc[userName].push(ticket);
      return acc;
    }, {});
  };

  const groupByPriority = (tickets) => {
    const priorities = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'];
    return tickets.reduce((acc, ticket) => {
      const priorityLabel = priorities[ticket.priority] || 'No Priority';
      if (!acc[priorityLabel]) acc[priorityLabel] = [];
      acc[priorityLabel].push(ticket);
      return acc;
    }, {});
  };


  const sortByPriority = (tickets) => {
    return [...tickets].sort((a, b) => b.priority - a.priority);
  };

  const sortByTitle = (tickets) => {
    return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
  };

 
  let groupedTickets = [];
  if (grouping === 'status') groupedTickets = groupByStatus(tickets);
  else if (grouping === 'user') groupedTickets = groupByUser(tickets);
  else if (grouping === 'priority') groupedTickets = groupByPriority(tickets);


  for (const group in groupedTickets) {
    groupedTickets[group] =
      sorting === 'priority'
        ? sortByPriority(groupedTickets[group])
        : sortByTitle(groupedTickets[group]);
  }

  return (
    <div className="kanban-content">
      {Object.keys(groupedTickets).map((group) => (
        <KanbanColumn key={group} group={group} tickets={groupedTickets[group]} />
      ))}
    </div>
  );
};

export default KanbanBoard;
