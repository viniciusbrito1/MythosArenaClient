import React, { useEffect } from 'react';

function GlobalKeyListener({x,y,SetX,SetY}){
  const handleKeyPress = (event) => {
    console.log('Key pressed globally:', event.key);
    const delta = 10
    const keyActions = {
        'w' : () => SetY(y-delta),
        's' : () => SetY(y+delta),
        'a' : () => SetX(x-delta),
        'd' : () => SetX(x+delta),
    }

    const action = keyActions[event.key];

    if (action) {
        action();
    } else {
        console.log("Invalid Key Pressed")
    }
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