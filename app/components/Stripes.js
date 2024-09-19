import React from 'react'

const Stripe = ({ m, baseHeight }) => {  
  const height = m * baseHeight;
  const marginBottom = (1.2 - m) * baseHeight;
  
  return (
    <div
      style={{ marginBottom: `${marginBottom}px`, height: `${height}px` }}
      className="w-full bg-color-dark"
    ></div>
  );
};

export default function Stripes() {
  const baseHeight = 24;
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <div className={`w-full flex flex-col absolute bottom-0 left-0 z-[5]`}>
      {array.map((e, index) => (
        <Stripe key={index} m={(index + 1) / array.length} baseHeight={baseHeight} />
      ))}
    </div>
  );
}
