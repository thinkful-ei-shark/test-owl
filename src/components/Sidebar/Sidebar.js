import React from 'react';
import Participants from './Participants';

const Sidebar = ({ participants, chatEvents }) => {
  return (
    <div className='sidebar-container'>
      <Participants participants={participants}></Participants>
    </div>
  );
};

export default Sidebar;
