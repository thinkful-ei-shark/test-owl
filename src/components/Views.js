import React from 'react';
import './Views.js'; 




const Views = (props) => {
  console.log(props.participants);
  console.log(props.participants[0].avatar);
  const viewsArray = props.participants.map((index) => {
    return (<li key={index.id}>
    <h3>{index.name}</h3>
    <img src={index.avatar} alt="avatar images" />
    </li>
)
  });
  console.log(viewsArray);
  return (
    <div className='views-container'>
      <div className='host-views'> 
        <ul>{viewsArray}</ul>
      </div>
    </div>
  );
};

export default Views;
