import React from 'react';
import styled from 'styled-components';
import closeIcon from './chevron-left.svg';

const ControlBar = () => {
  return (
    <Controls>
      <LeftControls>
        <button type='button'>
          <img src={closeIcon} alt='Close' />
        </button>
        <button type='button'>0</button>
        <button type='button'>0</button>
        <button type='button'>0</button>
        <button type='button'>0</button>
      </LeftControls>
      <RightControls>
        <button type='button'>0</button>
        <button type='button'>0</button>
        <button type='button'>0</button>
        <button type='button'>0</button>
        <button type='button'>Leave Stage</button>
      </RightControls>
    </Controls>
  );
};

const LeftControls = styled.div`
  button {
    border-radius: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    width: 4.8rem;
    height: 4.8rem;
    margin-right: 1.6rem;

    img {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

const RightControls = styled.div`
  button {
    border-radius: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    width: 4.8rem;
    height: 4.8rem;

    :not(:last-child) {
      margin-right: 1.6rem;
    }

    :last-child {
      border-radius: 0;
      width: 16rem;
      height: 4.8rem;
      background-color: #f37a7b;
      outline: none;
      border: none;
      cursor: pointer;
      color: #fff;
    }
  }
`;

const Controls = styled.section`
  border-top: 0.1rem solid lightgray;
  grid-area: controlBar;
  padding: 0 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default ControlBar;
