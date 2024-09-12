import React from 'react';
import KanbanColumn from './KanbanColumn';
import './KanbanBoard.css';


import noPriorityIcon from '../assets/no-priority.svg';
import urgentIcon from '../assets/urgent.svg';
import highIcon from '../assets/high.svg';
import mediumIcon from '../assets/medium.svg';
import lowIcon from '../assets/low.svg';

import todoIcon from '../assets/to-do.svg';
import inProgressIcon from '../assets/in-progress.svg';
import doneIcon from '../assets/done.svg';
import backlogIcon from "../assets/backlog.svg";
import cancelIcon from '../assets/Cancelled.svg';

const KanbanBoard = ({ tickets, users, grouping, sorting }) => {
  const priorityIcons = {
    'No Priority': noPriorityIcon,
    'Urgent': urgentIcon,
    'High': highIcon,
    'Medium': mediumIcon,
    'Low': lowIcon
  };

  const statusIcons = {
    'Todo': todoIcon,
    'In progress': inProgressIcon,
    
    'Backlog': backlogIcon,
    'Done': doneIcon,
    'Cancel': cancelIcon,
  };

 
  const sortTickets = (tickets) => {
    return tickets.slice().sort((a, b) => {
      if (sorting === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sorting === 'priority') {
        return a.priority - b.priority;
      }
      return 0;
    });
  };

  const groupByStatus = (tickets) => {
   
    const statuses = ['Todo', 'In progress', 'Done', 'Backlog', 'Cancel'];
    const grouped = statuses.reduce((acc, status) => {
      acc[status] = [];
      return acc;
    }, {});

    tickets.forEach(ticket => {
      if (grouped[ticket.status]) {
        grouped[ticket.status].push(ticket);
      }
    });

    return grouped;
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


  let groupedTickets = [];
  if (grouping === 'status') groupedTickets = groupByStatus(tickets);
  else if (grouping === 'user') groupedTickets = groupByUser(tickets);
  else if (grouping === 'priority') groupedTickets = groupByPriority(tickets);


  for (let group in groupedTickets) {
    groupedTickets[group] = sortTickets(groupedTickets[group]);
  }

  return (
    <div className="kanban-content">
      {Object.keys(groupedTickets).map((group) => (
        <KanbanColumn
          key={group}
          group={group}
          tickets={groupedTickets[group]}
          grouping={grouping}
          priorityIcons={priorityIcons}
          statusIcons={statusIcons}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
