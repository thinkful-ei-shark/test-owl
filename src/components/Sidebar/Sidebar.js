import React, { useState } from 'react';
import Participants from './Participants';
import Chat from './Chat';
import SidebarTabs from './SidebarTabs';

const Sidebar = ({ participants, chatEvents }) => {
  const [tab, setTab] = useState('participants');

  const handleTabChange = (string) => {
    return setTab(string);
  };

  return (
    <div className='sidebar-container'>
      <SidebarTabs
        handleTabChange={handleTabChange}
        currentTab={tab}
      ></SidebarTabs>
      {tab === 'participants' ? (
        <Participants participants={participants}></Participants>
      ) : (
        <Chat participants={participants} chatEvents={chatEvents}></Chat>
      )}
    </div>
  );
};

export default Sidebar;
