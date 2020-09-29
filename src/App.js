import React from 'react';
import Views from './components/Views';
import Sidebar from './components/Sidebar';
import ControlBar from './components/ControlBar';

const App = ({ store }) => {
  console.log(store);
  return (
    <main class='session'>
      <Sidebar></Sidebar>
      <Views></Views>
      <ControlBar></ControlBar>
    </main>
  );
};

export default App;
