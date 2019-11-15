import React from 'react';

export default props => {
  return (
    <div
      style={{
        textAlign: 'center',
        maxWidth: '70%',
        marginLeft: '15%',
        minHeight: '40vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <div>{props.name}</div>
      <div>{props.description}</div>
    </div>
  );
};
