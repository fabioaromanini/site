import React from 'react';

import './project.css';

export default props => {
  const { name, description, bulletPoints } = props;

  return (
    <div className="project-container">
      <h4>{name}</h4>
      <div>{description}</div>
      <ul className="reseted-list">
        {bulletPoints && bulletPoints.map(bp => <li key={bp}>{bp}</li>)}
      </ul>
    </div>
  );
};
