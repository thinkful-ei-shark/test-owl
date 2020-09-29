import React from 'react';
import styled from 'styled-components';
import greenCircle from './green-circle.svg';
import grayCircle from './gray-circle.svg';

const renderStatus = (inSession, onStage) => {
  if (inSession && onStage) {
    return (
      <p>
        <img src={greenCircle} alt='Green Circle' />
        on stage
      </p>
    );
  }

  if (inSession && !onStage) {
    return (
      <p>
        <img src={greenCircle} alt='Green Circle' />
        in session
      </p>
    );
  }

  return (
    <p>
      <img src={grayCircle} alt='Gray Circle' />
      left session
    </p>
  );
};

const Participants = ({ participants }) => {
  return (
    <div className='participants-list'>
      {participants.map((p) => (
        <Participant key={p.id}>
          <img src={p.avatar} alt={p.name} />
          <div>
            <h5>{p.name}</h5>
            {renderStatus(p.inSession, p.onStage)}
          </div>
        </Participant>
      ))}
    </div>
  );
};

const Participant = styled.div`
  width: 292px;
  display: flex;

  :not(:first-child) {
    margin-top: 1.6rem;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: lightgray;
    margin-right: 0.8rem;
  }

  div h5 {
    margin: 0;
  }

  div p img {
    width: 1.6rem;
    height: 1.6rem;
  }

  div p {
    margin: 0;
    display: flex;
    align-items: center;
  }
`;

export default Participants;
