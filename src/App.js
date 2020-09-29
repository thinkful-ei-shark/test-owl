import React from 'react';
import Views from './components/Views';
import Sidebar from './components/Sidebar';
import ControlBar from './components/ControlBar';

const App = (props) => {
  //console.log(props.store.participants);
  const participants = props.store.participants;
  return (
    <main className="session">
      <Sidebar></Sidebar>
      <Views participants={participants}></Views>
      <ControlBar></ControlBar>
    </main>
  );
};

export default App;
