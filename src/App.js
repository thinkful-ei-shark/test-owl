import React from 'react';
import Views from './components/Views';
import Sidebar from './components/Sidebar/Sidebar';
import ControlBar from './components/ControlBar';

const App = ({ store }) => {
  return (
    <main className='session'>
      <Sidebar
        participants={store.participants}
        chatEvents={store.chatEvents}
      ></Sidebar>
      <Views></Views>
      <ControlBar></ControlBar>
    </main>
  );
};

export default App;
