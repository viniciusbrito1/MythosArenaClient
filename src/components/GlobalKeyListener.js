import React, { useEffect } from 'react';

const sendKeyPress = async (keyPressed,SetX,SetY) => {
  const nome ="brito"
  try {
    const response = await fetch('http://localhost:3001/api/move', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ nome , keyPressed }),
    })
    const json = await response.json()
    SetX(json.x)
    SetY(json.y)
  } catch (err) {
    console.log(err)
  }

  return false
}

function GlobalKeyListener({x,y,SetY,SetX}){
  const handleKeyPress = (event) => {
    sendKeyPress(event.key,SetX,SetY)
  };
  
  useEffect(() => {
    // Add the event listener when the component mounts
    document.addEventListener('keydown', handleKeyPress);
    
    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [x, y, SetY]); // The empty dependency array ensures the effect runs only once on mount
  
  return <></>
};

export default GlobalKeyListener;
