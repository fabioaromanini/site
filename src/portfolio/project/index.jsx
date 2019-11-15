import React from 'react';

import './project.css';

export default props => {
  return (
    <div className="project-container">
      <div>{props.name}</div>
      <div>{props.description}</div>
    </div>
  );
};
