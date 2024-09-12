import React from 'react';
import KanbanColumn from './KanbanColumn';
import './KanbanBoard.css';

const KanbanBoard = ({ tickets, users, grouping, sorting }) => {
  const priorityOrder = ['No Priority', 'Urgent', 'High', 'Medium', 'Low'];

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
    return tickets.reduce((acc, ticket) => {
      const priorities = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'];
      const priorityLabel = priorities[ticket.priority];
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

  // Sort the groups according to the defined priorityOrder
  if (grouping === 'priority') {
    groupedTickets = priorityOrder.reduce((acc, priority) => {
      if (groupedTickets[priority]) {
        acc[priority] = groupedTickets[priority];
      }
      return acc;
    }, {});
  }

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
