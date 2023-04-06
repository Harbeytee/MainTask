import { useState } from "react";

export default function LineGraph({val}) {
  const [data, setData] = useState(val);

  const width = 400;
  const height = 200;
  const padding = 20;

  // Calculate the x and y scales based on the data
  const xScale = (width - padding * 2) / (data.length - 1);
  const yScale = (height - padding * 2) / Math.max(...data);

  // Generate the path string for the line
  const path = data.map((d, i) => {
    const x = i * xScale + padding;
    const y = height - d * yScale - padding;
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  return (
    <div style={{border: '1px solid blue'}}>
        <svg viewBox={`0 0 ${width} ${height}`}>
          <linearGradient id='gradient1' x1='0' x2='0' y1='0' y2='1'>
            <stop offset='0%' stopColor="#FF5403" stopOpacity='0.2'/>
            <stop offset='100%' stopColor="#FF5403" stopOpacity='0'/>
          </linearGradient>
          <path d={path} stroke="#FF5403" fill="url(#gradient1)" />
        </svg>

    </div>
    
  );
}