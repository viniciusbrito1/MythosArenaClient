import React from 'react';

function TestComponent({x,y}){
  // JavaScript variables for x and y coordinates
  const xCoordinate = x;
  const yCoordinate = y;

  // Style object to position the div
  const divStyle = {
    position: 'absolute',
    left: `${xCoordinate}px`,
    top: `${yCoordinate}px`,
    width: '100px', // Set your desired width
    height: '100px', // Set your desired height
    backgroundColor: 'blue', // Set your desired background color
  };

  return (
    <div style={divStyle}>
      This div is dynamically positioned at ({xCoordinate}, {yCoordinate}).
    </div>
  );
};

export default TestComponent;