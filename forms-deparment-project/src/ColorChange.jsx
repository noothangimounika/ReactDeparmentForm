import React, { useState } from 'react';

function ColorChanger() {
  const [color, setColor] = useState('white');

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: color,marginLeft:'500px',borderRadius:'10px', marginTop:'100px', height: '300px', width: '300px' }}>
      <button style={{marginLeft:'50px', marginTop:'130px',width:'200px',height:'50px',borderRadius:'10px',fontSize:'20px'}} onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default ColorChanger;
