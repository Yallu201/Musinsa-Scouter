import Chart from 'chart.js';

function getDate(dateString) {
  const year = Number(dateString.substring(0, 4));
  const month = Number(dateString.substring(4, 6));
  const day = Number(dateString.substring(6, 8));
  return new Date(year, month, day);
}
export function createChart({ chartType, isDark, ctx, product, size }) {
  const days = Object.entries(product.calendar);
  const pLabels = days.map(([key]) => key);
  const pData = days.map(([key, { price }]) => ({
    x: getDate(key),
    y: Number(price),
  }));
  const rData = days.map(([key, { rank }]) => ({
    x: getDate(key),
    y: Number(rank),
  }));
  const length = days.length;
  const start = length - size >= 0 ? length - size : 0;
  const color = isDark ? '255,255,255' : '0,0,0';
  // const pColor = '0, 47, 100';
  const pColor = '120, 167, 220';
  const isPriceChart = chartType === 'price';
  const datasets = isPriceChart
    ? [
        {
          label: '가격',
          data: pData.slice(start, length),

          // Point Styling
          pointRadius: 1,
          pointHoverRadius: 1,
          pointBorderWidth: 3,
          pointBorderColor: `rgba(${pColor}, 0.3)`,
          pointBackgroundColor: `rgba(${pColor}, 0.3)`,
          pointHoverBackgroundColor: `rgba(${pColor}, 1)`,
          pointHoverBorderColor: `rgba(${pColor}, 1)`,

          // Line Styling
          borderWidth: 2,
          borderColor: `rgba(${pColor}, 0.9)`,
          backgroundColor: `rgba(${pColor}, 0.1)`,
          // lineTension: 0,
          // fill: (context) => false,
          hoverBackgroundColor: `rgba(${pColor}, 0.2)`,
          yAxisID: 'y-axis-1',
        },
      ]
    : [
        {
          label: '랭킹',
          data: rData.slice(start, length),

          // Point Styling
          pointRadius: 1,
          pointHoverRadius: 0,
          pointBorderWidth: 0,
          pointBorderColor: `rgba(${color},0)`,
          pointBackgroundColor: `rgba(${color},0)`,
          pointHoverBackgroundColor: `rgba(${color},0)`,
          pointHoverBorderColor: `rgba(${color},0)`,

          // Line Styling
          borderWidth: 1,
          borderColor: `rgba(${color},0.2)`,
          backgroundColor: `rgba(${color},0.0)`,
          // lineTension: 0,
          // fill: (context) => false,
          hoverBackgroundColor: `rgba(${color},0.2)`,
          yAxisID: 'y-axis-2',
        },
      ];
  const tooltips = isPriceChart
    ? {
        mode: 'index',
        intersect: false,
        caretSize: 10,
        callbacks: {
          label: function ({ value }) {
            return `${Intl.NumberFormat().format(value)} 원`;
          },
        },
      }
    : {
        mode: 'index',
        intersect: false,
        caretSize: 10,
        callbacks: {
          label: function ({ value }) {
            return `${value} 위`;
          },
        },
      };
  const yAxes = isPriceChart
    ? [
        {
          display: true,
          gridLines: {
            display: true,
            color: `rgba(${color},0.2)`,
          },
          position: 'left',
          id: 'y-axis-1',
          ticks: {
            display: true,
            stepSize: 100000,
            beginAtZero: true,
            callback: function (value, index, values) {
              return `${value / 10000}${value ? '만' : ''}원`;
            },
          },
        },
      ]
    : [
        {
          display: true,
          gridLines: {
            display: true,
          },
          position: 'left',
          id: 'y-axis-2',
          ticks: {
            display: true,
            stepSize: 100,
            beginAtZero: true,
            reverse: true,
            callback: function (value, index, values) {
              return `${value}위`;
            },
          },
        },
      ];
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: pLabels.slice(start, length),
      datasets,
    },
    options: {
      legend: {
        display: false,
      },
      tooltips,
      title: {
        text: 'product price',
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: true,
              color: `rgba(${color},0.2)`,
            },
            scaleLabel: {
              display: false,
              labelString: '날짜',
            },
            ticks: {
              display: true,
              callback: function (value, index, values) {
                return `${value.slice(4, 6)}.${value.slice(6, 8)}`;
              },
            },
          },
        ],
        yAxes,
      },
    },
  });
}
