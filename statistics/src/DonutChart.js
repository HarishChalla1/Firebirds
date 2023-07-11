
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

export function DonutChart() {
  const data = {
    labels: ['Polygon', 'Rectangle', 'Circle', 'Line', 'Brush', 'Dot'],
    datasets: [
      {
        data: [500, 200, 300, 400, 500, 600],
        backgroundColor: ['	rgb(195, 177, 225)', '#e3e1ec','#c1d8ec','#f0ccbe','#e2edcb','#d2daef'],
        borderColor:['rgb(195, 177, 225)', '#e3e1ec','#c1d8ec','#f0ccbe','#e2edcb','#d2daef'],
        
      },
    ],
  };

  const options = {};

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = 'bolder 15px sans-serif';
      ctx.fillStyle = 'red';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        `Polygon: ${data.datasets[0].data[0]}`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
      ctx.restore();
    },
  };

  return (
    <Doughnut
      data={data}
      options={options}
      plugins={[textCenter]}
    />
  );
}
