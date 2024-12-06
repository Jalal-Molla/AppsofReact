import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: 'relative',
        width: '200vw',
        height: '200vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          width: 100,
          height: 100,
          display: 'flex', // টেক্সট কেন্দ্রে রাখতে ফ্লেক্স ব্যবহার
          alignItems: 'center', // উল্লম্বভাবে কেন্দ্রে
          justifyContent: 'center', // অনুভূমিকভাবে কেন্দ্রে
          color: 'white', // টেক্সটের রঙ
          fontWeight: 'bold', // টেক্সটের বোল্ড স্টাইল
          fontSize: '25px',
          border:'4px solid black' ,// টেক্সট সাইজ
        }}
      >
        jalal
      </div>
    </div>
  );
}
