import React, { useRef, useEffect } from 'react'

export default function DonutChart({data, width, height, className}) {
    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current
        
        const ctx = canvas.getContext('2d')
        const x = canvas.width / 2
        const y = canvas.height / 2
        const radius = Math.min(x, y) * 0.8
        const thickness = 30

        function drawDonut(ctx, data, x, y, radius, thickness) {
          let startAngle = 0;
          data.forEach(({value, color}) => {
            const angle = (Math.PI * 2 * value) / 100
            ctx.fillStyle = color
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.arc(x, y, radius, startAngle, startAngle + angle, false)
            ctx.closePath()
            ctx.fill()
  
            ctx.fillStyle = '#fff'
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.arc(x, y, radius - thickness, startAngle, startAngle + 9, false)
            ctx.closePath()
            ctx.fill()
            startAngle += angle
          })
          
           
            
        }

        drawDonut(ctx, data, x, y, radius, thickness)

    }, [data, height, width])

    
  return (
    <canvas ref={canvasRef} width={width} height={height} className={className}/>
  )
}
