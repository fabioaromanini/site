import React from 'react';

export default props => {
  return (
    <div
      style={{
        textAlign: 'center',
        maxWidth: '70%',
        marginLeft: '15%',
        marginBottom: '1rem',
        paddingBottom: '23px',
      }}
    >
      <div>{props.name}</div>
      <div>{props.description}</div>
    </div>
  );
};
