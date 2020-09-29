import React from 'react';
import Views from './components/Views';
import Sidebar from './components/Sidebar';
import ControlBar from './components/ControlBar';

const App = ({ store }) => {
  return (
    <main className='session'>
      <Sidebar></Sidebar>
      <Views participants={store.participants}></Views>
      <ControlBar></ControlBar>
    </main>
  );
};

export default App;
