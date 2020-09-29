import React from 'react';
import styled from 'styled-components';
import Views from './components/Views';
import Sidebar from './components/Sidebar/Sidebar';
import ControlBar from './components/ControlBar';

const App = ({ store }) => {
  return (
    <Main>
      <Sidebar
        participants={store.participants}
        chatEvents={store.chatEvents}
      ></Sidebar>
      <Views participants={store.participants}></Views>
      <ControlBar></ControlBar>
    </Main>
  );
};

const Main = styled.main`
  display: grid;
  grid-template-columns: 330px calc(100% - 330px) 100%;
  grid-template-rows: calc(100% - 75px);
  grid-template-areas:
    'sidebar views'
    'sidebar views'
    'controlBar controlBar';
  height: 100vh;
`;

export default App;
