
export default function hook() {

    const options = {
        plugins: {
          legend: {
            
            display: false,
            
            
          },
        },
        
        
        scales: {
          
          x: {
            ticks: {
             
              font: {
                size: 16
              },
              color: '#4D5760',
              padding: 30,
              
            },
            title: {
              align: 'end',
              display: false,
            },
            border: {
              display: false
            },
            grid: {
              display: false,
              
            },
            
          },
          y: {
            ticks: {
              font: {
                size: 16,
                lineHeight: 1.9
              },
              color: '#4D5760',
              padding: 20
            },
            border: {
              dash: [4, 5],
              display: false
            },
            grid: {
  
              display: true,
              //offset: true,
              tickBorderDash: [8, 4],
              drawTicks: true,
              color: '#DBDEE6',
            }
          }
        
       
         }
      };

      function getDate(n) {
        const val = n.graph_data?.views
        const keys = Object.keys(val)
        const splitKeys = keys.map(item => (item.split('-')))
    
        return (
          splitKeys.map((item, i) => {
            if(Number(item[1]) == 1) {
              return  `${item[2]} Jan`
          }
          else if(Number(item[1]) == 2) {
            return  `${item[2]} Feb`
          }
          else if(Number(item[1]) == 3) {
            return `${item[2]} Mar`
          }
          else if(Number(item[1]) == 4) {
            return `${item[2]} Apr`
          }
          else if(Number(item[1]) == 5) {
            return `${item[2]} May`
          }
          else if(Number(item[1]) == 6) {
            return `${item[2]} Jun`
          }
          else if(Number(item[1]) == 7) {
            return `${item[2]} Jul`
          }
          else if(Number(item[1]) == 8) {
            return `${item[2]} Aug`
          }
          else if(Number(item[1]) == 9) {
            return `${item[2]} Sep`
          }
          else if(Number(item[1]) == 10) {
            return `${item[2]} Oct`
          }
          else if(Number(item[1]) == 11) {
            return `${item[2]} Nov`
          }
          else if (Number(item[1]) == 12) {
            return `${item[2]} Dec`
          }
            
        })
          
        )
       
      }

  return {options, getDate}
}
