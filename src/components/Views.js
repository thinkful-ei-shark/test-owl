import React from 'react';
import './Views.css'; 

const Views = (props) => {

  const hostView = (
    <div className="owner-view">
      <h3>Optimus Prime</h3>
      <img
        src="https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1"
        alt="avatar images"
        className="portraits"
      />
    </div>
  );
  const viewsArray = props.participants.map((index) => {
    return (
      index.onStage && (
        <div className="host-views" key={index.id}>
          <ul>
            <li>
              <h3>{index.name}</h3>
              <img
                className="portraits"
                src={index.avatar}
                alt="avatar images"
              />
            </li>
          </ul>
        </div>
      )
    );
  });
  console.log(viewsArray);
  return (
    <div className="views-container">
      {viewsArray}
    </div>
  );
};

export default Views;

      