import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const Chat = ({ participants, chatEvents }) => {
  return (
    <ChatList>
      {chatEvents.map((chat) => (
        <Message
          // not the best way to key I know but in this case it's unique
          // in an app you'd probably have a unique identifer in each obj
          key={chat.type}
          type={chat.type}
          time={chat.timestamp}
          user={participants.find((p) => p.id === chat.participantId)}
        ></Message>
      ))}
    </ChatList>
  );
};

const ChatList = styled.div`
  padding: 1.6rem;
  height: calc(100% - 48px);
  overflow-y: scroll;
`;

export default Chat;
