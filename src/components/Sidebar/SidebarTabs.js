import React from 'react';
import styled from 'styled-components';
import settingsIcon from './settings.svg';
import linkIcon from './link.svg';
import infoIcon from './info.svg';

const SidebarTabs = ({ handleTabChange, currentTab }) => {
  const handleChatOnClick = (string) => {
    return handleTabChange(string);
  };

  const renderTabs = () => {
    if (currentTab === 'participants') {
      return (
        <>
          <button type='button' onClick={() => handleChatOnClick('chat')}>
            Chat
          </button>
          <button
            type='button'
            className='btn-active'
            onClick={() => handleChatOnClick('participants')}
          >
            Participants
          </button>
          <button type='button'>
            <img src={settingsIcon} alt='button' />
          </button>
          <button type='button'>
            <img src={linkIcon} alt='button' />
          </button>
          <button type='button'>
            <img src={infoIcon} alt='button' />
          </button>
        </>
      );
    }

    return (
      <>
        <button
          type='button'
          className='btn-active'
          onClick={() => handleChatOnClick('chat')}
        >
          Chat
        </button>
        <button type='button' onClick={() => handleChatOnClick('participants')}>
          Participants
        </button>
        <button type='button'>
          <img src={settingsIcon} alt='button' />
        </button>
        <button type='button'>
          <img src={linkIcon} alt='button' />
        </button>
        <button type='button'>
          <img src={infoIcon} alt='button' />
        </button>
      </>
    );
  };

  return <Tabs>{renderTabs()}</Tabs>;
};

const Tabs = styled.div`
  background-color: gray;
  height: 4.8rem;
  width: 100%;
  display: flex;

  button {
    height: 100%;
    border: none;
    flex-grow: 1;
    cursor: pointer;
    outline: none;
    border-bottom: 0.1px solid lightgray;
    color: #8e939a;
  }

  img {
    width: 1.6rem;
  }
`;

export default SidebarTabs;
