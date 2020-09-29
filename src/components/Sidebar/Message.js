import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

const Message = ({ user, time, type }) => {
  function renderMessage(type) {
    switch (type) {
      case 'message':
        return (
          <UserMessage>
            <img src={user.avatar} alt={user.name} />
            <div>
              <p>
                <span>{user.name}</span> {format(time, 'MM/dd/yyyy')}
              </p>
              <p>messaged you</p>
            </div>
          </UserMessage>
        );
      case 'thumbs-up':
        return (
          <SystemMessage>
            <p>{format(time, 'MM/dd/yyyy')}</p>
            <p>
              <span>{user.name}</span> gave a thumbs up
            </p>
          </SystemMessage>
        );
      case 'thumbs-down':
        return (
          <SystemMessage>
            <p>{format(time, 'MM/dd/yyyy')}</p>
            <p>
              <span>{user.name}</span> gave a thumbs down
            </p>
          </SystemMessage>
        );
      case 'raise-hand':
        return (
          <SystemMessage>
            <p>{format(time, 'MM/dd/yyyy')}</p>
            <p>
              <span>{user.name}</span> raised their hand
            </p>
          </SystemMessage>
        );
      case 'clap':
        return (
          <SystemMessage>
            <p>{format(time, 'MM/dd/yyyy')}</p>
            <p>
              <span>{user.name}</span> clapped
            </p>
          </SystemMessage>
        );
      case 'join':
        return (
          <SystemMessage>
            <p>{format(time, 'MM/dd/yyyy')}</p>
            <p>
              <span>{user.name}</span> joined
            </p>
          </SystemMessage>
        );
      case 'leave':
        return (
          <SystemMessage>
            <p>{format(time, 'MM/dd/yyyy')}</p>
            <p>
              <span>{user.name}</span> left
            </p>
          </SystemMessage>
        );
      case 'join-stage':
        return (
          <SystemMessage>
            <p>{format(time, 'MM/dd/yyyy')}</p>
            <p>
              <span>{user.name}</span> joined the stage
            </p>
          </SystemMessage>
        );
      case 'leave-stage':
        return (
          <SystemMessage>
            <p>{format(time, 'MM/dd/yyyy')}</p>
            <p>
              <span>{user.name}</span> left the stage
            </p>
          </SystemMessage>
        );
      default:
        return;
    }
  }

  return renderMessage(type);
};

const SystemMessage = styled.div`
  color: #8e939a;
  font-size: 1.4rem;
  padding: 0.8rem;

  p {
    margin: 0;
    text-align: center;
  }

  span {
    font-weight: 700;
  }
`;

const UserMessage = styled.div`
  font-size: 1.6rem;
  padding: 0.8rem;

  display: flex;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    background-color: lightgray;
    margin-right: 0.8rem;
  }

  p {
    margin: 0;
    color: #8e939a;
    font-size: 1.4rem;
  }

  span {
    color: #000;
    font-weight: 700;
  }

  p:last-child {
    font-size: 1.6rem;
  }
`;

export default Message;
