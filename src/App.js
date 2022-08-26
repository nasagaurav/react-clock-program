import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [x, setx] = useState(0);

  const p2 = () => {
    if (x < 60) {
      setx(x + 1);
    } else {
      setx(0);
    }
  };

  const p1 = () => {
    setTimeout(p2, 1000);
  };

  useEffect(p1, [x]);
  return (
    <div>
      <h1>{x}</h1>
    </div>
  );
}
