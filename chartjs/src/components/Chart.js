import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const Chart = () => {
  const state = {
    chartData: {
      labels: [
        'London',
        'Birmingham',
        'Liverpool',
        'Nottingham',
        'Sheffield',
        'Bristol'
      ],
      datasets: [
        {
          label: 'Population',
          data: [7556900, 984333, 864122, 729977, 685368, 617280],
          backgroundColor: [
            'green',
            'red',
            'yellow',
            'blue',
            'orange',
            'purple'
          ]
        }
      ]
    }
  };
  return (
    <div className='chart'>
      <Bar
        data={state.chartData}
        options={{
          title: {
            display: true,
            text: 'Largest cities in the United Kingdom',
            fontSize: 25
          },
          legend: {
            display: true,
            position: 'right',
            labels: {
              fontColor: '#000'
            }
          }
        }}
      />
    </div>
  );
};

export default Chart;
